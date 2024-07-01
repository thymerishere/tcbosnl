<script>
    import { isNavOpen } from "../store";

    const updateNav = function() {
       isNavOpen.update((x) => !x)
    }

    isNavOpen.subscribe((x) => {
        console.log(x)
    })
</script>

<header class="flex flex-col sticky top-0 z-50 backdrop-blur-xl">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-5">
        <a class="hidden md:flex bg-slate-100 p-1 rounded" href="/">
            Thomas Christiaan Bos
        </a>
        <a class="flex md:hidden" href="/">
            <i class="fa-solid fa-t md:hidden bg-slate-100 p-2 rounded"></i>
        </a>


        <button on:click={updateNav} class="sm:hidden cursor-pointer text-white text-2xl">
            {#if $isNavOpen}
                <i class="fa-sharp fa-solid fa-xmark"></i>
            {/if}
            {#if !$isNavOpen}
                <i class="fa-sharp fa-solid fa-bars"></i>
            {/if}
        </button>

        <nav class="hidden sm:flex items-center gap-3 text-lg lg:gap-6">
            <a href="#bio" class="text-slate-100 duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Bio</a>
            <a href="#projects" class="text-slate-100 duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Projecten</a>
            <a href="#experience" class="text-slate-100 duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Ervaring</a>
            <a href="#skills" class="text-slate-100 duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Skills</a>
            <a href="#links" class="text-slate-100 duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Links</a>
        </nav>
    </div>

    {#if $isNavOpen}
        <div>
            <div class="absolute pr-5 text-right text-3xl grid grid-cols-1 w-full bg-slate-100">
                <a on:click={updateNav} href="#bio" class="duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Bio</a>
                <a on:click={updateNav} href="#projects" class="duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Projecten</a>
                <a on:click={updateNav} href="#experience" class="duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Ervaring</a>
                <a on:click={updateNav} href="#skills" class="duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Skills</a>
                <a on:click={updateNav} href="#links" class="duration-100 hover:bg-slate-200 hover:text-slate-700 rounded p-1 cursor-pointer">Links</a>
            </div>
        </div>
    {/if}
</header>
