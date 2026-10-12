<svelte:options customElement="ev-charging-sim" />

<script lang="ts">
    import { onMount } from "svelte";
    import {
        createState,
        simulate,
        isPlugged,
        HOUR,
        type Car,
        type SimEnv,
    } from "./charging.ts";

    // ---- config -------------------------------------------------------------
    const STEP = 60; // seconds per simulation step (must divide the price slot)
    const STEP_HOURS = STEP / HOUR;
    const DAY = 24 * HOUR;
    const START_HOUR = 12; // t = 0 corresponds to 12:00
    const W = 800,
        H = 150,
        YMAX = 120; // plot area and kW axis
    const M = { top: 10, right: 28, bottom: 26, left: 44 }; // room for axis labels
    const vbX = -M.left,
        vbW = W + M.left + M.right; // shared viewBox x-range

    // One price per slot (EUR/MWh), starting at 12:00: evening peak, cheap at night
    const prices = [
        90, 95, 100, 120, 160, 210, 230, 190, 150, 120, 95, 80, 60, 50, 45, 45,
        55, 75, 110, 140, 150, 130, 110, 100,
    ];
    const env: SimEnv = { prices, priceSlot: HOUR };

    // ---- sample session data (replace with your own) -------------------------
    // Times are plain seconds, rounded to whole minutes. Nothing depends on STEP.
    const atHour = (h: number) => Math.round(h * 60) * 60;

    function sampleCars(n = 12): Record<string, Car> {
        let seed = 42;
        const rnd = () =>
            (seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32;
        const cars: Record<string, Car> = {};
        for (let i = 0; i < n; i++) {
            const id = `car${i + 1}`;
            const arrival = atHour(4 + rnd() * 4); // 16:00 to 20:00
            const departure = atHour(18 + rnd() * 4); // 06:00 to 10:00
            const battery = 40 + rnd() * 40;
            const start = battery * (0.1 + rnd() * 0.4);
            cars[id] = {
                id,
                arrival,
                departure,
                capacity: start,
                target: Math.min(battery * 0.9, start + 15 + rnd() * 25),
                maxPower: rnd() < 0.5 ? 7.4 : 11,
                power: 0,
            };
        }
        return cars;
    }
    const initialCars = sampleCars();
    const carIds = Object.keys(initialCars); // fixed bay per car

    // ---- state --------------------------------------------------------------
    let smart = $state(false);
    let speed = $state(3600); // simulated seconds per real second

    // Playback: runs only while the component is on screen and the user hasn't paused.
    let root: HTMLElement;
    let inView = $state(false);
    let userPaused = $state(false);
    const playing = $derived(inView && !userPaused);

    // $state.raw: we replace these wholesale each step, so no deep proxying needed
    let sim = $state.raw(createState(initialCars)); // follows the switch
    let shadow = $state.raw(createState(initialCars)); // always baseline
    let loadActive = $state.raw<number[]>([]);
    let loadBase = $state.raw<number[]>([]);
    let costActive = $state(0);
    let costBase = $state(0);
    let acc = 0; // simulated seconds not yet consumed by a step

    const price = (t: number) =>
        prices[Math.min(prices.length - 1, Math.floor(t / env.priceSlot))];

    function advance() {
        const t = sim.time;
        sim = simulate(sim, STEP, smart ? "smart" : "baseline", env);
        shadow = simulate(shadow, STEP, "baseline", env);
        loadActive = [...loadActive, sim.load];
        loadBase = [...loadBase, shadow.load];
        // kW * h = kWh; price is per MWh. A step lies inside one price slot (STEP divides it).
        costActive += (sim.load * STEP_HOURS * price(t)) / 1000;
        costBase += (shadow.load * STEP_HOURS * price(t)) / 1000;
    }

    function reset() {
        sim = createState(initialCars);
        shadow = createState(initialCars);
        loadActive = [];
        loadBase = [];
        costActive = 0;
        costBase = 0;
        acc = 0;
    }

    // ---- fixed-timestep loop driven by requestAnimationFrame -----------------
    onMount(() => {
        // Respect reduced-motion: don't autoplay, let the user press Play.
        if (matchMedia("(prefers-reduced-motion: reduce)").matches)
            userPaused = true;

        // Start when scrolled into view, pause when scrolled away.
        const io = new IntersectionObserver(
            ([entry]) => (inView = entry.isIntersecting),
            { threshold: 0.4 },
        );
        io.observe(root);

        let raf: number;
        let last = performance.now();

        function frame(now: number) {
            const dt = Math.min((now - last) / 1000, 0.1); // clamp after tab switches
            last = now;

            if (playing && sim.time < DAY) {
                acc += dt * speed;
                let n = 0;
                while (acc >= STEP && n++ < 50 && sim.time < DAY) {
                    // cap steps per frame
                    advance();
                    acc -= STEP;
                }
            }
            raf = requestAnimationFrame(frame);
        }
        raf = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(raf);
            io.disconnect();
        };
    });

    // ---- derived view data --------------------------------------------------
    const clock = $derived.by(() => {
        const h = (START_HOUR + sim.time / HOUR) % 24;
        const hh = Math.floor(h),
            mm = Math.floor((h - hh) * 60);
        return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
    });

    const bays = $derived(
        carIds.map((id, i) => {
            const c = sim.cars[id];
            return { c, i, present: isPlugged(c, sim.time) };
        }),
    );

    const peakActive = $derived(Math.max(0, ...loadActive));
    const peakBase = $derived(Math.max(0, ...loadBase));

    const x = (t: number) => (t / DAY) * W;
    const y = (kw: number) => H - (kw / YMAX) * H;
    const stepPath = (arr: number[]) =>
        arr
            .map(
                (v, i) =>
                    `${i ? "L" : "M"}${x(i * STEP)},${y(v)} L${x((i + 1) * STEP)},${y(v)}`,
            )
            .join(" ");

    const pMax = Math.max(...prices);
    const pricePath = prices
        .map((p, i) => {
            const py = H - (p / pMax) * H * 0.6;
            return `${i ? "L" : "M"}${x(i * env.priceSlot)},${py} L${x((i + 1) * env.priceSlot)},${py}`;
        })
        .join(" ");
    const ticks = Array.from({ length: 9 }, (_, k) => k * 3); // every 3 hours
</script>

<div class="wrap" bind:this={root}>
    <header>
        <button onclick={() => (userPaused = !userPaused)}
            >{userPaused ? "Play" : "Pause"}</button
        >
        <button onclick={reset}>Reset</button>
        <label>
            <select bind:value={speed}>
                <option value={600}>10 min/s</option>
                <option value={1800}>30 min/s</option>
                <option value={3600}>1 h/s</option>
                <option value={7200}>2 h/s</option>
            </select>
        </label>
        <div class="toggle">
            <input type="checkbox" bind:checked={smart} />
            <label> &nbsp;Smart charging </label>
        </div>
        <span class="load">{sim.load.toFixed(1)} kW now</span>
        <strong>{clock}</strong>
    </header>

    <!-- Charging bays -->
    <svg
        viewBox="{vbX} 0 {vbW} 150"
        class="bays"
        role="img"
        aria-label="Charging bays"
    >
        {#each bays as { c, i, present } (c.id)}
            {@const col = i % 6}
            {@const row = Math.floor(i / 6)}
            {@const bx = 10 + col * 130}
            {@const by = 10 + row * 70}
            <rect x={bx} y={by} width="120" height="60" rx="8" class="bay" />
            {#if present}
                <g class="car" style="transform: translate({bx}px, {by}px)">
                    <rect
                        x="8"
                        y="8"
                        width="104"
                        height="32"
                        rx="8"
                        class:active={c.power > 0}
                        class="body"
                    />
                    <rect
                        x="8"
                        y="46"
                        width="104"
                        height="6"
                        rx="3"
                        class="track"
                    />
                    <rect
                        x="8"
                        y="46"
                        width={104 * (c.capacity / c.target)}
                        height="6"
                        rx="3"
                        class="fill"
                    />
                    <text x="60" y="29" text-anchor="middle"
                        >{c.power.toFixed(1)} kW</text
                    >
                </g>
            {/if}
        {/each}
    </svg>

    <!-- Grid load graph -->
    <svg
        viewBox="{vbX} {-M.top} {vbW} {H + M.top + M.bottom}"
        class="graph"
        role="img"
        aria-label="Grid load"
    >
        {#each ticks as h}
            <line
                x1={x(h * HOUR)}
                x2={x(h * HOUR)}
                y1="0"
                y2={H}
                class="grid"
            />
            <text x={x(h * HOUR)} y={H + 14} text-anchor="middle" class="tick"
                >{(START_HOUR + h) % 24}:00</text
            >
        {/each}
        <path d={pricePath} class="price" />
        <path d={stepPath(loadBase)} class="base" />
        <path d={stepPath(loadActive)} class="active-line" />
        <line x1={x(sim.time)} x2={x(sim.time)} y1="0" y2={H} class="now" />
        <text x="-8" y="10" text-anchor="end" class="tick">{YMAX} kW</text>
    </svg>

    <footer>
        <span
            >Peak: <b>{peakActive.toFixed(0)} kW</b> (baseline {peakBase.toFixed(
                0,
            )} kW)</span
        >
        <span
            >Energy cost: <b>€{costActive.toFixed(2)}</b> (baseline €{costBase.toFixed(
                2,
            )})</span
        >
        <span class="legend"
            ><i class="d price"></i>price <i class="d base"></i>baseline
            <i class="d active-line"></i>active</span
        >
    </footer>
</div>

<style>
    .wrap {
        font: 14px monospace;
        padding: 30px 0;
    }
    header,
    footer {
        display: flex;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
        margin: 0.5rem 0;
    }
    .load {
        margin-left: auto;
        font-variant-numeric: tabular-nums;
    }
    svg {
        width: 100%;
        height: auto;
        display: block;
    }
    .bay {
        fill: #333;
        stroke: #444;
    }
    .car {
        transition: opacity 0.3s;
    }
    .body {
        fill: #9ca3af;
        transition: fill 0.3s;
    }
    .body.active {
        fill: var(--accent-color-4);
    }
    .car text {
        fill: var(--text-color-primary);
        font-size: 12px;
    }
    .track {
        fill: #e5e7eb;
    }
    .fill {
        fill: var(--accent-color-2);
    }
    .grid {
        stroke: #e5e7eb;
    }
    .tick {
        font-size: 10px;
        fill: #6b7280;
    }
    .price {
        fill: none;
        stroke: #f59e0b;
        stroke-width: 1.5;
        stroke-dasharray: 4 3;
    }
    .base {
        fill: none;
        stroke: #9ca3af;
        stroke-width: 1.5;
    }
    .active-line {
        fill: none;
        stroke: #16a34a;
        stroke-width: 2;
    }
    .now {
        stroke: #dc2626;
        stroke-width: 1.5;
    }
    .legend {
        margin-left: auto;
    }
    .d {
        display: inline-block;
        width: 14px;
        height: 0;
        border-top: 2px solid;
        margin: 0 4px 3px 10px;
    }
    .d.price {
        border-color: #f59e0b;
        border-top-style: dashed;
    }
    .d.base {
        border-color: #9ca3af;
    }
    .d.active-line {
        border-color: #16a34a;
    }

    button {
        border: solid 2px #444;
        border-radius: 8px;
        background: none;
        color: var(--text-color-primary);
        font-family: monospace;
        font-size: 14px;
    }

    select {
        border: solid 2px #444;
        border-radius: 4px;
        background: none;
        color: var(--text-color-primary);
        font-family: monospace;
        font-size: 14px;
    }

    .toggle {
        position: relative;
        box-sizing: border-box;
    }

    .toggle input[type="checkbox"] {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .toggle input[type="checkbox"]:before,
    .toggle input[type="checkbox"]:after {
        content: "";
        width: 5px;
        height: 14px;
        background: #fff;
        z-index: 1;
        left: 10px;
        top: 6px;
        border-radius: 14px;
        box-sizing: border-box;
        position: absolute;
    }
    .toggle input[type="checkbox"]:after {
        background: none;
        border: 3px solid #fff;
        width: 14px;
        left: 45px;
    }
    .toggle label {
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
    }
    .toggle label:before {
        content: "";
        width: 72px;
        height: 32px;
        background: #888;
        box-shadow: inset 0 0 0 0px #13bf11;
        position: relative;
        display: inline-block;
        border-radius: 20px;
        box-sizing: border-box;
        transition: 0.2s ease-in;
    }
    .toggle label:after {
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        left: 0;
        top: -4px;
        z-index: 2;
        background: #fff;
        box-shadow: 0 1px 10px #0005;
        box-sizing: border-box;
        transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
        box-shadow: inset 40px 0 0 #13bf11;
    }
    .toggle input[type="checkbox"]:checked + label:after {
        left: 32px;
    }
</style>
