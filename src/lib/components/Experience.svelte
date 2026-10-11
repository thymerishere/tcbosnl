<script>
    import ExperienceItem from "./ExperienceItem.svelte";
</script>

<h1 id="experience">Ervaring</h1>

<div class="experience-items">
    <ExperienceItem title="Alliander" time="sinds sept 2026">
        <p>
            Alliander is de grootste distributienetbeheerder van Nederland.
            Binnen Alliander werk ik aan vernieuwing van het Grid Control
            Platform, waardoor het makkelijker wordt om binnenkomende meldingen
            van stroomstoring te verwerken en deze te koppelen aan de nodige
            informatie om het net zo goed mogelijk te kunnen schakelen.
        </p>
    </ExperienceItem>

    <ExperienceItem title="BBTG Energy Solutions" time="sinds nov 2025">
        <p>
            Infiniot is sinds november 2025 onderdeel van BBTG en binnen BBTG
            gaan we als BBTG Energy Solutions verder werken aan de digitaliseren
            van de energiesector.
        </p>
    </ExperienceItem>

    <ExperienceItem title="ElaadNL" time="jan 2022 - sept 2026">
        <p>
            ElaadNL is een kennis- en innovatiecentrum op het gebied van EV. Ik
            werk bij ElaadNL als Software Engineer aan API's en dashboards die
            worden gebruikt door netbeheerders, gemeenten, en andere instanties.
            Daarnaast doe ik data analyse op het gebied van elektrisch laden om
            inzichten te krijgen in laadgedrag en marktontwikkelingen.
        </p>
    </ExperienceItem>

    <ExperienceItem title="Infiniot" time="sinds jan 2022">
        <p>
            Infiniot is een software en data consultancy, vooral actief in de
            energiemarkt. Ik werk bij Infiniot als Software Engineering
            consultant om bedrijven te helpen in digitalisering en de
            energietransitie.
        </p>
    </ExperienceItem>

    <ExperienceItem title="Batenburg Bellt" time="sept 2021 - juli 2022">
        <p>
            Batenburg Bellt is een consultancy gespecialiseerd in
            procesautomatisering. Bij Bellt heb ik mijn masterproject gedaan als
            intern.
        </p>
    </ExperienceItem>

    <ExperienceItem title="Finaps" time="mei - juni 2019">
        <p>
            Finaps is een software consultancy die bedrijven helpt in
            digitalisering en innovatie. Bij Finaps heb ik mijn bachelorproject
            gedaan als intern. In een team van drie hebben we succesvol een
            decision engine gebouwd dat een hogere throughput bereikt dan
            vergelijkbare methodes door middel van een actor-based model.
        </p>
    </ExperienceItem>
</div>

<style>
    .experience-items {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .experience-items p {
        text-align: justify;
    }
</style>
