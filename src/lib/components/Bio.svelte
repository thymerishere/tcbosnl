<script>
    import ProfileImage from "#lib/assets/profile_square.jpeg";
    import BioItem from "./BioItem.svelte";

    let age = Math.floor(
        (Date.now() - Date.parse("1997-12-16T13:00:00+01:00")) /
            (3600 * 24 * 365.25 * 1000),
    );
</script>

<h1 id="bio">Wie ben ik?</h1>

<div class="bio-items">
    <BioItem img={ProfileImage} accent={1}>
        <h4>Over mijzelf...</h4>
        Ik ben Thomas en ik ben {age} jaar. Ik heb mijn BSc en MSc Computer Science
        aan de TU Delft behaald en ik werk inmiddels vier jaar als Software Engineer
        in de energiesector.
    </BioItem>
    <BioItem accent={2}>
        <h4>Software Engineer</h4>
        Ik ben een
        <span>Software Engineer</span>
        met een passie voor kwaliteit en structuur. Ik werk graag in Python aan kleine
        en grote projecten.
    </BioItem>
    <BioItem accent={3}>
        <h4>Data Scientist</h4>
        Ik ben een
        <span>Data Scientist</span>
        die data gebruikt om problemen te onderzoeken en op te lossen. Hiervoor bouw
        ik modellen, data visualisaties, dashboards, en rapporten.
    </BioItem>
    <BioItem accent={4}>
        <h4>Ervaren in de Energiemarkt</h4>
        Ik heb
        <span>vier jaar ervaring in de energiesector</span>
        en heb gewerkt met verschillende netbeheerders om samen energietransitie
        te versnellen.
    </BioItem>
    <BioItem accent={5}>
        <h4>Teamlid</h4>
        Ik werk graag samen met collega's om iets groters te bouwen. Dit doe ik via
        <span>Agile</span> of
        <span>Scrum</span>, wat het team stuurt naar het bouwen van
        klantgerichte en waardevolle producten.
    </BioItem>
    <!-- <BioItem>
            <p class="text-xl font-light text-center">Analyst</h4>
            Ik ben altijd gedreven door een wil om te weten hoe dingen werken.
            Ik graaf altijd graag net wat dieper om mijn kennis te verbreden.
        </BioItem>
        <BioItem>
            <p class="text-xl font-light text-center">Perfectionist</h4>
            Er kan in mijn ogen altijd iets verbeterd worden.
            Maar, de kunst is om te bepalen wanneer iets beter moet.
        </BioItem> -->
    <BioItem accent={6}>
        <h4>Muziekliefhebber</h4>
        In mijn vrije tijd besteed ik mijn tijd graag aan muziek luisteren en spelen.
        Ik ben een
        <span>gitarist</span>
        in een
        <span>rockband</span>, waar ik muziek schrijf, mix, en master.
    </BioItem>
</div>

<style>
    .bio-items {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
</style>
