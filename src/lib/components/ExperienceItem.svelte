<script>
    export let title = "title";
    export let time = "time";
</script>

<div class="experience-item">
    <div class="title-and-time">
        <p class="experience-title">{title}</p>
        <p class="experience-time">{time}</p>
    </div>
    <slot />
</div>

<style>
    .experience-item {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 700px) {
        .experience-item {
            grid-template-columns: 1fr;
        }
    }

    .title-and-time {
        margin: auto;
    }

    .title-and-time p {
        text-align: center;
        margin: 0;
        font-family: "Space Grotesk Variable", sans-serif;
        font-weight: light;
    }

    .experience-title {
        font-size: 32px;
    }
</style>
