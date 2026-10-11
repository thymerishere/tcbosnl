<script>
    import HeroImage from "#lib/assets/hero.jpg";
</script>

<span id="home"></span>

<div class="hero" style="background-image: url({HeroImage})">
    <div class="hero-contents">
        <h2>
            <span>Thomas<br />Christiaan<br />Bos</span>
        </h2>
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

    .hero-contents {
        margin: auto auto auto 0;
    }
</style>
