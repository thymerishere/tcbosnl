<script>
    import { LinkedinLogoIcon } from "phosphor-svelte";
    import { InstagramLogoIcon } from "phosphor-svelte";
    import { LampIcon } from "phosphor-svelte";
    import { GuitarIcon } from "phosphor-svelte";
</script>

<h1 id="links">Links</h1>

<div class="links-container">
    <a
        target="_blank"
        href="https://www.linkedin.com/in/thomas-christiaan-bos/"
    >
        <LinkedinLogoIcon size={32} />
        <p>LinkedIn <span>(thomas-christiaan-bos)</span></p>
    </a>
    <a
        target="_blank"
        href="https://elaad.nl/blog-een-kijkje-achter-de-schermen-bij-de-ontwikkeling-van-de-laadprofielengenerator/"
    >
        <LampIcon size={32} />
        <p>
            Mijn blog over de LS-profielengenerator <span>(ElaadNL)</span>
        </p>
    </a>
    <a target="_blank" href="https://www.instagram.com/anotherforestband/">
        <InstagramLogoIcon size={32} />
        <p>Instagram <span>(@anotherforestband)</span></p>
    </a>
    <a target="_blank" href="https://anotherforestband.com">
        <GuitarIcon size={32} />
        <p>Bandwebsite <span>(@anotherforestband)</span></p>
    </a>
</div>

<style>
    .links-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        place-content: center;
    }

    .links-container a {
        width: 300px;
        text-align: center;
        color: var(--text-color-primary);
        text-decoration: none;
    }

    .links-container a:hover {
        text-shadow: none;
        filter: drop-shadow(0px 0px 20px #aaa);
    }
</style>
