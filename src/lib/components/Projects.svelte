<script>
    import ProjectItem from "./ProjectItem.svelte";
    import Charging from "./simulation/Charging.svelte";
</script>

<h1 id="projects">Projecten</h1>

<p class="project-items"></p>

<ProjectItem>
    <h2>Grid Control Platform</h2>
    <h3>Alliander</h3>
    <p>
        Binnen Alliander werk ik aan het Grid Control Platform om het
        distributienet robuuster te maken. Door het verwerken van verschillende
        signalen van klanten en assets wordt het mogelijk sneller te acteren op
        mogelijke stroomstoringen. Aangezien het platform altijd ingezet moet
        kunnen worden is de hoogste prioriteit dat alle inputdata integer zijn
        en het platform goed is getest, zowel handmatig als automatisch.
    </p>
</ProjectItem>

<ProjectItem>
    <h2>Interactieve Outlook</h2>
    <h3>ElaadNL</h3>
    <p>
        De <a href="https://outlook.elaad.nl">Interactieve Outlook</a> is een ElaadNL
        dashboard met als doel netbeheerders, overheden en andere instanties inzicht
        te geven in de groei van EV en laadinfrastructuur in Nederland. Voor de meer
        dan 14.000 CBS-buurten in Nederland wordt laten zien wat de groei is van
        elke vorm van EV en laadinfrastructuur tot en met 2050. Daarnaast kunnen
        gemiddelde laadprofielen ingezien worden om inzicht te krijgen in de netimpact
        van laadinfrastructuur en slim laden. Wegens de grote hoeveelheid data en
        brede stakeholdergroep was de challenge om een begrijpelijk en snel dashboard
        te bouwen, wat toch brede mogelijkheden geeft tot de nodige inzichten.
    </p>
</ProjectItem>

<Charging />

<ProjectItem>
    <h2>Vermogensprofielen voor EV's en Laadpalen</h2>
    <h3>ElaadNL</h3>
    <p>
        Dit project heeft als doel het creëren van een modellering van het laden
        van EV's en laadpalen. Met dit model worden vermogensprofielen gemaakt
        die door netbeheerders, overheden en andere instanties worden ingezet om
        de impact van EV's op het elektriciteitsnet te berekenen. Via
        optimalisatiemodellen kan daarnaast inzicht gegeven worden in de impact
        van verschillende vormen van slim laden, zoals netbewust, prijsgestuurd
        of bidirectioneel laden. Aangezien laadprofielen breed worden ingezet
        door verschillende instanties voor korte- en langetermijn prognoses was
        de uitdaging om een breed inzetbare modellering te maken die op basis
        van grote hoeveelheden laaddata verschillende soorten laadprofielen kan
        genereren die aansluiten op landelijke prognoseprocessen. Het
        bijbehorende <a href="https://charging.elaad.nl"
            >Laadprofielengeneratordashboard</a
        > geeft een interactieve manier om het model aan te roepen. In mijn rol als
        EV-expert hielp ik netbeheerders en overheden in het gebruik van profielen
        en de ontwikkelingen van EV in het algemeen.
    </p>
</ProjectItem>

<ProjectItem>
    <h2>Gridshield</h2>
    <h3>ElaadNL</h3>
    <p>
        Gridshield is een elektronisch vangnet voor middenspanningsruimtes. De
        transformatoren worden beschermd door bij overbelasting elektrisch laden
        in stappen af te schalen. In dit project heb ik in een klein team een
        Python-implementatie van Gridshield gebouwd en geschikte hardware
        onderzocht. Na de ontwikkeling is het systeem in een woonwijk getest op
        laadpalen en warmtepompen.
    </p>
</ProjectItem>

<ProjectItem>
    <h2>Voorspelling van het Koolzuurgehalte van Frisdrank</h2>
    <h3>Batenburg Bellt</h3>
    <p>
        In mijn masterproject heb ik onderzoek gedaan naar het toepassen van
        Explainable Artificial Intelligence (XAI) om te voorspellen wat het
        koolzuurgehalte van gevulde flesjes is. Met sensordata van leidingen en
        tanks is een methode ontwikkeld die voorspellingen geeft en daarnaast
        uitlegt wat er voor zorgt dat flesjes niet het juiste koolzuurgehalte
        hebben. Hierbij heb ik de klant kunnen helpen in het leveren van nieuwe
        inzichten.
    </p>
</ProjectItem>

<style>
    h2,
    h3 {
        margin: 0;
        text-align: center;
    }

    h3 {
        font-weight: 200;
    }

    p {
        text-align: justify;
    }
</style>
