<script>
    import EducationItem from "./EducationItem.svelte";
    import SkillColumn from "./SkillColumn.svelte";
    import SkillItem from "./SkillItem.svelte";
</script>

<h1 id="skills">Skills</h1>

<div class="skill-columns">
    <svelte-css-wrapper class="educations">
        <SkillColumn title="Opleidingen">
            <EducationItem
                title="Bachelor Computer Science"
                time="TU Delft, 2016 - 2019"
                color="rgb(1, 166, 214)"
            >
                <p>
                    Tijdens mijn bachelor heb ik de wetenschappelijke basis van
                    computers, programmeertalen, algoritmiek, data analyse, en
                    AI geleerd.
                </p>
            </EducationItem>
            <EducationItem
                title="Master Computer Science"
                time="TU Delft, 2019 - 2022"
                color="rgb(1, 166, 214)"
            >
                <p>
                    Tijdens mijn master heb ik een specialisatie in AI
                    Technology gedaan en mij verder verdiept in AI, algoritmiek,
                    en ethiek.
                </p>
            </EducationItem>
            <EducationItem
                title="Professional Scrum Master 1"
                time="2024"
                color="rgb(29, 47, 70)"
            >
                <p>
                    Om mijn kennis in Scrum te verbreden heb ik het PSM-1
                    certificaat behaald.
                </p>
            </EducationItem>
            <EducationItem
                title="Microsoft AZ-900"
                time="2026"
                color="rgba(7, 166, 240)"
            >
                <p>
                    Om mijn kennis in Microsoft Azure te verbreden heb ik het
                    Microsoft AZ-900 certificaat behaald.
                </p>
            </EducationItem>
        </SkillColumn>
    </svelte-css-wrapper>

    <SkillColumn title="Programmeren">
        <SkillItem title="Python" experience="5 jaar" percentage="90" />
        <SkillItem title="SQL" experience="4 jaar" percentage="70" />
        <SkillItem title="R" experience="2 jaar" percentage="60" />
        <SkillItem title="Javascript" experience="4 jaar" percentage="60" />
        <SkillItem title="HTML, CSS" experience="4 jaar" percentage="60" />
        <SkillItem title="Java" experience="Basis" percentage="10" />
    </SkillColumn>

    <SkillColumn title="Python">
        <SkillItem title="Jupyter" experience="5 jaar" percentage="70" />
        <SkillItem title="FastAPI" experience="4 jaar" percentage="60" />
        <SkillItem title="Pandas" experience="4 jaar" percentage="60" />
        <SkillItem title="Polars" experience="4 jaar" percentage="60" />
        <SkillItem title="pytest" experience="4 jaar" percentage="60" />
        <SkillItem title="asyncio" experience="2 jaar" percentage="50" />
    </SkillColumn>

    <SkillColumn title="Tools">
        <SkillItem title="Linux" experience="4 jaar" percentage="70" />
        <SkillItem title="Docker" experience="4 jaar" percentage="70" />
        <SkillItem title="GitHub" experience="4 jaar" percentage="60" />
        <SkillItem title="Azure" experience="2 jaar" percentage="40" />
        <SkillItem title="Azure DevOps" experience="2 jaar" percentage="30" />
        <SkillItem title="PostgreSQL" experience="2 jaar" percentage="30" />
        <SkillItem title="Kubernetes" experience="1 jaar" percentage="20" />
    </SkillColumn>

    <SkillColumn title="Meta">
        <SkillItem title="Agile" experience="2 jaar" percentage="80" />
        <SkillItem title="Scrum" experience="2 jaar" percentage="80" />
        <SkillItem title="Engels" experience="Vloeiend" percentage="80" />
    </SkillColumn>
</div>

<style>
    .educations {
        grid-column: span 2;
    }
    .skill-columns {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }

    @media (max-width: 1000px) {
        .educations {
            grid-column: span 2;
        }
        .skill-columns {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 700px) {
        .educations {
            grid-column: span 1;
        }
        .skill-columns {
            grid-template-columns: 1fr;
        }
    }
</style>
