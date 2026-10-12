<script>
    import HeroImage from "#lib/assets/hero.jpg";
</script>

<div class="hero" style="background-image: url({HeroImage})">
    <div class="hero-contents">
        <h1>
            <span>Thomas<br />Christiaan<br />Bos</span>
        </h1>
        <p>
            <span>Software Engineer</span>,<br />
            <span>Data Scientist</span>,<br />
            <span>Muziekliefhebber</span>.<br />
        </p>
    </div>
</div>

<style>
    .hero {
        height: var(--hero-height);
        background-position: center;
        background-size: cover;
        display: flex;
    }

    h1 {
        font-size: calc(min(7vw, 100px));
    }

    p {
        font-size: calc(min(3vw, 50px));
    }

    .hero-contents {
        margin: auto auto auto 5vw;
    }
</style>
