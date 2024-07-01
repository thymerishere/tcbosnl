<script>
    import EducationItem from "./EducationItem.svelte";
import SkillColumn from "./SkillColumn.svelte";
    import SkillItem from "./SkillItem.svelte";
</script>

<div>
    <span id="skills" class="relative -top-[80px]" />
    <p class="bg-slate-900 text-slate-100 text-5xl md:text-6xl lg:text-7xl text-center font-light pt-10">
        Skills
    </p>
</div>

<div class="bg-slate-900 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <SkillColumn title="Opleidingen">
        <EducationItem title="Bachelor Computer Science" time="TU Delft, 2016 - 2019">
            Tijdens mijn bachelor heb ik de wetenschappelijke basis van computers, programmeertalen,
            algoritmiek, data analyse, en AI geleerd.
        </EducationItem>
        <EducationItem title="Master Computer Science" time="TU Delft, 2019 - 2022">
            Tijdens mijn master heb ik een specialisatie in AI Technology
            gedaan en mij verder verdiept in AI, algoritmes, en ethiek.
        </EducationItem>
        <EducationItem title="Professional Scrum Master 1" time="2024">
            Om mijn kennis in Scrum te verbreden heb ik het PSM-1 certificaat behaald.
        </EducationItem>
    </SkillColumn>

    <SkillColumn title="Programmeren">
        <SkillItem title="Python" experience="2 jaar" percent="to-90%" />
        <SkillItem title="SQL" experience="2 jaar" percent="to-70%" />
        <SkillItem title="R" experience="1 jaar" percent="to-60%" />
        <SkillItem title="Javascript" experience="1 jaar" percent="to-60%" />
        <SkillItem title="FastAPI" experience="6 maanden" percent="to-30%" />
        <SkillItem title="Java" experience="Basis" percent="to-10%" />
    </SkillColumn>

    <SkillColumn title="Tools">
        <SkillItem title="Linux" experience="2 jaar" percent="to-70%" />
        <SkillItem title="Docker" experience="2 jaar" percent="to-70%"/>
        <SkillItem title="Azure DevOps" experience="6 maanden" percent="to-30%"/>
        <SkillItem title="Kubernetes" experience="Basis" percent="to-10%"/>
    </SkillColumn>

    <SkillColumn title="Meta">
        <SkillItem title="Agile" experience="2 jaar" />
        <SkillItem title="Scrum" experience="2 jaar" />
        <SkillItem title="Engels" experience="Vloeiend" percent="from-80%" />
    </SkillColumn>
</div>
