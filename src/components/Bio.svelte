<script>
    import BioItem from "./BioItem.svelte";
</script>

<div>
    <span id="bio" class="relative -top-[70px]" />
    <p class="bg-gradient-to-b from-transparent to-slate-900 text-slate-100 text-5xl md:text-6xl lg:text-7xl text-center font-light mt-10 pb-3">
        Wie ben ik?
    </p>
</div>

<div class="bg-slate-900">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BioItem>
            <div class="grid grid-cols-2">
                <div class="text-lg">
                    <p class="text-2xl font-light">Over mijzelf...</p>
                    Ik ben Thomas en ik ben 26 jaar.
                    Ik heb Computer Science aan de TU Delft gestudeerd en
                    ik werk nu twee jaar als Software Engineer in de energiemarkt.
                </div>
                <div class="flex p-2">
                    <img src="profile_square.jpeg" class="object-cover object-center rounded-lg " alt="Profielfoto" />
                </div>
            </div>
        </BioItem>
        <BioItem>
            <p class="text-xl font-light text-center">Software Engineer</p>
            Ik ben een <span class="font-bold">Software Engineer</span> met een passie voor
            kwaliteit en structuur. Ik werk graag in Python aan kleine en grote projecten.
        </BioItem>
        <BioItem>
            <p class="text-xl font-light text-center">Data Scientist</p>
            Ik ben een <span class="font-bold">Data Scientist</span> die
            data gebruikt om problemen te onderzoeken en op te lossen.
            Hiervoor maak ik data visualisaties, dashboards, en raporten.
        </BioItem>
        <BioItem>
            <p class="text-xl font-light text-center">Ervaren in de Energiemarkt</p>
            Ik heb <span class="font-bold">twee jaar ervaring in de energiemarkt</span>
            en heb samen gewerkt met verschillende netbeheerders.
        </BioItem>
        <BioItem>
            <p class="text-xl font-light text-center">Teamlid</p>
            Ik werk graag samen met collega's om samen aan iets groters te bouwen.
            Dit doe ik via
            <span class="font-bold">Agile</span> of
            <span class="font-bold">Scrum</span>
            wat het team stuurt naar het bouwen van klantgerichte producten.
        </BioItem>
        <BioItem>
            <p class="text-xl font-light text-center">Analyst</p>
            Ik ben altijd gedreven door een wil om te weten hoe dingen werken.
            Ik graaf altijd graag net wat dieper om mijn kennis te verbreden.
        </BioItem>
        <BioItem>
            <p class="text-xl font-light text-center">Perfectionist</p>
            Er kan in mijn ogen altijd iets verbeterd worden.
            Maar, de kunst is om te bepalen wanneer iets beter moet.
        </BioItem>
        <BioItem>
            <p class="text-xl font-light text-center">Muziekliefhebber</p>
            In mijn vrije tijd besteed ik mijn tijd graag aan muziek luisteren en spelen.
            Ik ben een
            <span class="font-bold">gitarist</span>
            in een
            <span class="font-bold">rockband</span>,
            waar ik muziek schrijf, mix, en master.
        </BioItem>
    </div>
</div>
