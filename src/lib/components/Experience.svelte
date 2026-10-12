<script>
    import AllianderLogo from "#lib/assets/alliander.png";
    import InfiniotLogo from "#lib/assets/infiniot.svg";
    import BBTGLogo from "#lib/assets/bbtg.jpeg";
    import ElaadLogo from "#lib/assets/elaad.png";
    import FinapsLogo from "#lib/assets/finaps.svg";
    import BatenburgBelltLogo from "#lib/assets/batenburg-bellt.png";
    import ExperienceItem from "./ExperienceItem.svelte";
</script>

<h1 id="experience">Ervaring</h1>

<div class="experience-items">
    <ExperienceItem
        title="Alliander"
        time="sinds sept 2026"
        img={AllianderLogo}
    >
        <p>
            Alliander is de grootste distributienetbeheerder van Nederland.
            Binnen Alliander werk ik aan vernieuwing van het Grid Control
            Platform, waardoor het makkelijker wordt om binnenkomende meldingen
            van stroomstoring te verwerken en deze te koppelen aan de nodige
            informatie om het net zo goed mogelijk te kunnen schakelen.
        </p>
    </ExperienceItem>

    <ExperienceItem
        title="BBTG Energy Solutions"
        time="sinds nov 2025"
        img={BBTGLogo}
    >
        <p>
            BBTG is in 2025 ontstaan als samenkomst van verschillende partijen
            actief in de IT sector, waaronder Infiniot. Binnen BBTG werk ik
            onder BBTG Energy Solutions verder aan het digitaliseren van de
            energiesector.
        </p>
    </ExperienceItem>

    <ExperienceItem title="ElaadNL" time="jan 2022 - sept 2026" img={ElaadLogo}>
        <p>
            ElaadNL is een kennis- en innovatiecentrum op het gebied van EV. Ik
            werk bij ElaadNL als Software Engineer aan API's en dashboards die
            worden gebruikt door netbeheerders, gemeenten, en andere instanties.
            Daarnaast doe ik data analyse op het gebied van elektrisch laden om
            inzichten te krijgen in laadgedrag en marktontwikkelingen.
        </p>
    </ExperienceItem>

    <ExperienceItem title="Infiniot" time="sinds jan 2022" img={InfiniotLogo}>
        <p>
            Infiniot is een software en data consultancy, vooral actief in de
            energiemarkt. Ik werk bij Infiniot als Software Engineering
            consultant om bedrijven te helpen in digitalisering en de
            energietransitie.
        </p>
    </ExperienceItem>

    <ExperienceItem
        title="Batenburg Bellt"
        time="sept 2021 - juli 2022"
        img={BatenburgBelltLogo}
        padding="20px 10px"
        backgroundColor="white"
    >
        <p>
            Batenburg Bellt is een consultancy gespecialiseerd in
            procesautomatisering. Bij Bellt heb ik mijn masterproject gedaan als
            intern.
        </p>
    </ExperienceItem>

    <ExperienceItem
        title="Finaps"
        time="mei - juni 2019"
        img={FinapsLogo}
        padding="20px"
        backgroundColor="white"
    >
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
        gap: 40px;
    }

    .experience-items p {
        text-align: justify;
    }
</style>
