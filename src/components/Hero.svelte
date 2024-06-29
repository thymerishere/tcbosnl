<script>
    import Header from "./Header.svelte";
import SectionWrapper from "./SectionWrapper.svelte";

</script>
<SectionWrapper>
    <Header />
    <div class="bg-hero bg-no-repeat bg-cover bg-center shadow-md">
        <div class="pb-10 pt-40 px-10 max-w-[500px]">
            <h2 class="py-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mx-auto w-full">
                <span class="text-slate-100">Thomas Christiaan Bos</span>
            </h2>
            <p class="text-slate-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <span>Software Engineer</span>,
                <span>Data Scientist</span>,
                <span>Muziekliefhebber</span>.
            </p>
        </div>
    </div>
</SectionWrapper>
