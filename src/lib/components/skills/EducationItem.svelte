<script>
    let {
        children,
        title,
        time = null,
        color = "var(--accent-color-1)",
    } = $props();

    const gradient = `linear-gradient(90deg, ${color} 0%, rgba(255, 255, 255, 0.1) 100%)`;
</script>

<div class="education-item" style="background: {gradient};">
    <div class="title-and-time">
        <h4 class="education-title">{title}</h4>
        {#if time}
            <p class="education-time">{time}</p>
        {/if}
    </div>

    <div class="education-contents">
        {@render children?.()}
    </div>
</div>

<style>
    .education-item {
        width: 100%;
        border-radius: 8px;
    }

    .title-and-time p {
        text-align: center;
        margin: 0;
        font-family: "Space Grotesk Variable", sans-serif;
        font-weight: light;
    }

    .education-title {
        font-size: 18px;
        text-align: center;
        margin: 8px 0 0 0;
    }

    .education-contents {
        padding: 8px;
        text-align: justify;
    }
</style>
