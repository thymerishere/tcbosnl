// sim.ts: pure simulation, no Svelte, no timers, no randomness.
// Time is in simulated seconds from the start of the data window.
// Units: kW for power, kWh for energy. The only conversion between seconds and
// hours goes through HOUR, and nothing here assumes a particular step size.

export const HOUR = 3600; // seconds per hour

export type Car = {
	id: string;
	arrival: number;   // s
	departure: number; // s
	capacity: number;  // kWh currently in the battery
	target: number;    // kWh wanted at departure
	maxPower: number;  // kW the car/charger can take
	power: number;     // kW while charging in the most recent step (0 if idle)
};

export type SimState = {
	time: number;                  // s, start of the *next* step
	cars: Record<string, Car>;     // all cars, present or not
	load: number;                  // average total kW over the most recent step
};

export type Policy = 'baseline' | 'smart';

export type SimEnv = {
	prices: number[];   // one price per slot (e.g. EUR/MWh)
	priceSlot: number;  // seconds per price slot, e.g. HOUR
};

export const isPlugged = (c: Car, t: number) => t >= c.arrival && t < c.departure;
export const remaining = (c: Car) => Math.max(0, c.target - c.capacity);

export function createState(cars: Record<string, Car>): SimState {
	return { time: 0, cars: structuredClone(cars), load: 0 };
}

/**
 * Smart policy, re-evaluated every step (receding horizon).
 * Fill the car's remaining charging hours into the cheapest slots left before
 * departure, and charge now only if the slot containing `now` is one of them.
 * If there is no slack, it degrades to charging at full power.
 */
function inCheapestSlots(car: Car, now: number, env: SimEnv): boolean {
	const { prices, priceSlot } = env;
	const first = Math.floor(now / priceSlot);
	const last = Math.min(prices.length - 1, Math.ceil(car.departure / priceSlot) - 1);

	const slots: { i: number; hours: number }[] = [];
	for (let i = first; i <= last; i++) {
		const start = Math.max(now, i * priceSlot);
		const end = Math.min(car.departure, (i + 1) * priceSlot);
		if (end > start) slots.push({ i, hours: (end - start) / HOUR });
	}

	let hoursNeeded = remaining(car) / car.maxPower; // hours at full power
	const hoursAvailable = slots.reduce((a, s) => a + s.hours, 0);
	if (hoursNeeded >= hoursAvailable - 1e-9) return true; // no slack: charge now

	slots.sort((a, b) => prices[a.i] - prices[b.i] || a.i - b.i);
	for (const s of slots) {
		if (hoursNeeded <= 1e-9) break;
		if (s.i === first) return true;
		hoursNeeded -= s.hours;
	}
	return false;
}

/**
 * The part of [t, t+dt) during which the car is plugged in, or null.
 * Handles arrivals and departures that fall inside a step.
 */
function pluggedWindow(car: Car, t: number, dt: number) {
	const start = Math.max(t, car.arrival);
	const end = Math.min(t + dt, car.departure);
	return end > start ? { start, hours: (end - start) / HOUR } : null;
}

/** Charging power (kW) to use for the plugged-in window of this step. */
function powerFor(car: Car, w: { start: number; hours: number }, policy: Policy, env: SimEnv): number {
	const need = remaining(car);
	if (need <= 1e-9) return 0;
	// never deliver more than is still needed within the window
	const cap = Math.min(car.maxPower, need / w.hours);
	if (policy === 'baseline') return cap;
	return inCheapestSlots(car, w.start, env) ? cap : 0;
}

/**
 * Advance the world by dt seconds. Pure: returns a new state, input is untouched.
 * dt must divide the price slot so a step never straddles two prices.
 */
export function simulate(state: SimState, dt: number, policy: Policy, env: SimEnv): SimState {
	if (env.priceSlot % dt > 1e-9) {
		throw new Error(`dt (${dt}s) must divide the price slot (${env.priceSlot}s)`);
	}
	const t = state.time;
	const cars: Record<string, Car> = {};
	let energy = 0; // kWh delivered this step, all cars

	for (const [id, c] of Object.entries(state.cars)) {
		const w = pluggedWindow(c, t, dt);
		const power = w ? powerFor(c, w, policy, env) : 0;
		const delivered = w ? power * w.hours : 0; // kW * h = kWh
		energy += delivered;
		cars[id] = { ...c, power, capacity: Math.min(c.target, c.capacity + delivered) };
	}
	// average grid load over the step; equals the sum of powers when nobody arrives or leaves mid-step
	return { time: t + dt, cars, load: energy / (dt / HOUR) };
}
