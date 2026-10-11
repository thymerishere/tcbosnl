<script>
    import { CompassRoseIcon } from "phosphor-svelte";
    import { XCircleIcon } from "phosphor-svelte";

    let isNavOpen = $state(false);

    const closeNav = () => {
        isNavOpen = false;
    };
</script>

<header>
    <a class="title-name" href="/" aria-label="Home">Thomas Christiaan Bos</a>

    <nav class="nav-big">
        <a href="#bio">Bio</a>
        <a href="#projects">Projecten</a>
        <a href="#experience">Ervaring</a>
        <a href="#skills">Skills</a>
        <a href="#links">Links</a>
    </nav>

    <button
        onclick={() => {
            isNavOpen = !isNavOpen;
        }}
        class="nav-small-button"
    >
        {#if isNavOpen}
            <XCircleIcon size={32} />
        {/if}
        {#if !isNavOpen}
            <CompassRoseIcon size={32} />
        {/if}
    </button>

    {#if isNavOpen}
        <nav class="nav-small">
            <a class="nav-small-item" onclick={closeNav} href="#bio">Bio</a>
            <a class="nav-small-item" onclick={closeNav} href="#projects"
                >Projecten</a
            >
            <a class="nav-small-item" onclick={closeNav} href="#experience"
                >Ervaring</a
            >
            <a class="nav-small-item" onclick={closeNav} href="#skills"
                >Skills</a
            >
            <a class="nav-small-item" onclick={closeNav} href="#links">Links</a>
        </nav>
    {/if}
</header>

<style>
    header {
        top: 0;
        position: sticky;
        display: flex;
        height: var(--nav-height);
        backdrop-filter: blur(10px);
    }

    .title-name {
        margin: auto 10px auto;
        color: var(--text-color-primary);
        text-decoration: none;
        font-size: 22px;
    }

    nav {
        display: flex;
        flex-direction: row;
    }

    nav a {
        color: var(--text-color-primary);
        text-decoration: none;
    }

    .nav-big {
        display: none;
        font-size: 22px;
        margin: auto 0 auto auto;
        gap: 20px;
    }

    .nav-small-button {
        margin: auto 10px auto auto;
        border: none;
        color: var(--text-color-primary);
        background: none;
    }

    .nav-small {
        top: var(--nav-height);
        right: 0;
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: #333;
    }

    .nav-small-item {
        text-align: right;
        font-size: 48px;
        padding: 0 10px 0 10px;
    }

    @media (min-width: 700px) {
        .nav-small {
            display: none;
        }

        .nav-small-button {
            display: none;
        }

        .nav-big {
            display: flex;
        }
    }
</style>
