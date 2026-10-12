<script>
    let {
        children,
        title,
        time,
        img,
        padding = "0",
        backgroundColor = null,
    } = $props();
</script>

<div class="experience-item">
    <div class="title-and-time">
        <img
            src={img}
            alt={title}
            style="padding: {padding}; background-color: {backgroundColor};"
        />
        <p class="experience-time">{time}</p>
    </div>
    {@render children?.()}
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
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .title-and-time p {
        text-align: center;
        margin: 0;
        font-family: "Space Grotesk Variable", sans-serif;
        font-weight: light;
        font-style: italic;
    }

    .title-and-time img {
        max-width: 200px;
        max-height: 200px;
        min-width: 150px;
    }
</style>
