<script>
    let isNavOpen = $state();

    const updateNav = function () {
        isNavOpen = !isNavOpen;
    };
</script>

<header>
    <div>
        <a href="/" aria-label="Home"> Thomas Christiaan Bos </a>

        <button onclick={updateNav}>
            {#if $isNavOpen}
                close
            {/if}
            {#if !$isNavOpen}
                open
            {/if}
        </button>

        <nav>
            <a href="#bio">Bio</a>
            <a href="#projects">Projecten</a>
            <a href="#experience">Ervaring</a>
            <a href="#skills">Skills</a>
            <a href="#links">Links</a>
        </nav>
    </div>

    {#if $isNavOpen}
        <div>
            <div>
                <a onclick={updateNav} href="#bio">Bio</a>
                <a onclick={updateNav} href="#projects">Projecten</a>
                <a onclick={updateNav} href="#experience">Ervaring</a>
                <a onclick={updateNav} href="#skills">Skills</a>
                <a onclick={updateNav} href="#links">Links</a>
            </div>
        </div>
    {/if}
</header>
