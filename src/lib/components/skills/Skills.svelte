<script>
    import EducationItem from "./EducationItem.svelte";
    import SkillColumn from "./SkillColumn.svelte";
    import SkillItem from "./SkillItem.svelte";
</script>

<h1 id="skills">Skills</h1>

<div class="skill-columns">
    <SkillColumn title="Opleidingen">
        <EducationItem
            title="Bachelor Computer Science"
            time="TU Delft, 2016 - 2019"
        >
            <p>
                Tijdens mijn bachelor heb ik de wetenschappelijke basis van
                computers, programmeertalen, algoritmiek, data analyse, en AI
                geleerd.
            </p>
        </EducationItem>
        <EducationItem
            title="Master Computer Science"
            time="TU Delft, 2019 - 2022"
        >
            <p>
                Tijdens mijn master heb ik een specialisatie in AI Technology
                gedaan en mij verder verdiept in AI, algoritmes, en ethiek.
            </p>
        </EducationItem>
        <EducationItem title="Professional Scrum Master 1" time="2024">
            <p>
                Om mijn kennis in Scrum te verbreden heb ik het PSM-1
                certificaat behaald.
            </p>
        </EducationItem>
    </SkillColumn>

    <SkillColumn title="Programmeren">
        <SkillItem title="Python" experience="2 jaar" percentage="90" />
        <SkillItem title="SQL" experience="2 jaar" percentage="70" />
        <SkillItem title="R" experience="1 jaar" percentage="60" />
        <SkillItem title="Javascript" experience="1 jaar" percentage="60" />
        <SkillItem title="HTML, CSS" experience="1 jaar" percentage="60" />
        <SkillItem title="FastAPI" experience="6 maanden" percentage="30" />
        <SkillItem title="Java" experience="Basis" percentage="10" />
    </SkillColumn>

    <SkillColumn title="Tools">
        <SkillItem title="Linux" experience="2 jaar" percentage="70" />
        <SkillItem title="Docker" experience="2 jaar" percentage="70" />
        <SkillItem
            title="Azure DevOps"
            experience="6 maanden"
            percentage="30"
        />
        <SkillItem title="Kubernetes" experience="Basis" percentage="10" />
    </SkillColumn>

    <SkillColumn title="Meta">
        <SkillItem title="Agile" experience="2 jaar" percentage="80" />
        <SkillItem title="Scrum" experience="2 jaar" percentage="80" />
        <SkillItem title="Engels" experience="Vloeiend" percentage="80" />
    </SkillColumn>
</div>

<style>
    .skill-columns {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>
