<script>
    import Bio from "#lib/components/Bio.svelte";
    import Experience from "#lib/components/Experience.svelte";
    import Footer from "#lib/components/Footer.svelte";
    import Header from "#lib/components/Header.svelte";
    import Hero from "#lib/components/Hero.svelte";
    import Links from "#lib/components/Links.svelte";
    import Projects from "#lib/components/Projects.svelte";
    import Skills from "#lib/components/skills/Skills.svelte";
</script>

<main>
    <Header />
    <Hero />
    <div class="page-contents">
        <Bio />
        <Projects />
        <Experience />
        <Skills />
        <Links />
    </div>
    <Footer />
</main>

<style>
    .page-contents {
        padding: 0 5vw;
    }
</style>
