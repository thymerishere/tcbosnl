<script>
    import BioItem from "./BioItem.svelte";
</script>

<h1 id="bio">Wie ben ik?</h1>

<div>
    <div>
        <BioItem>
            <div>
                <div>
                    <p>Over mijzelf...</p>
                    Ik ben Thomas en ik ben 26 jaar. Ik heb Computer Science aan
                    de TU Delft gestudeerd en ik werk nu twee jaar als Software Engineer
                    in de energiemarkt.
                </div>
                <div>
                    <img src="profile_square.jpeg" alt="Profielfoto" />
                </div>
            </div>
        </BioItem>
        <BioItem>
            <p>Software Engineer</p>
            Ik ben een<span>Software Engineer</span> met een passie voor kwaliteit
            en structuur. Ik werk graag in Python aan kleine en grote projecten.
        </BioItem>
        <BioItem>
            <p>Data Scientist</p>
            Ik ben een<span>Data Scientist</span> die data gebruikt om problemen
            te onderzoeken en op te lossen. Hiervoor maak ik data visualisaties,
            dashboards, en raporten.
        </BioItem>
        <BioItem>
            <p>Ervaren in de Energiemarkt</p>
            Ik heb<span>twee jaar ervaring in de energiemarkt</span>
            en heb samen gewerkt met verschillende netbeheerders.
        </BioItem>
        <BioItem>
            <p>Teamlid</p>
            Ik werk graag samen met collega's om samen aan iets groters te bouwen.
            Dit doe ik via
            <span>Agile</span> of
            <span>Scrum</span>
            wat het team stuurt naar het bouwen van klantgerichte producten.
        </BioItem>
        <!-- <BioItem>
            <p class="text-xl font-light text-center">Analyst</p>
            Ik ben altijd gedreven door een wil om te weten hoe dingen werken.
            Ik graaf altijd graag net wat dieper om mijn kennis te verbreden.
        </BioItem>
        <BioItem>
            <p class="text-xl font-light text-center">Perfectionist</p>
            Er kan in mijn ogen altijd iets verbeterd worden.
            Maar, de kunst is om te bepalen wanneer iets beter moet.
        </BioItem> -->
        <BioItem>
            <p>Muziekliefhebber</p>
            In mijn vrije tijd besteed ik mijn tijd graag aan muziek luisteren en
            spelen. Ik ben een
            <span>gitarist</span>
            in een
            <span>rockband</span>, waar ik muziek schrijf, mix, en master.
        </BioItem>
    </div>
</div>
