<script>
    let { children, img = null, accent = 1 } = $props();

    const gradients = [1, 2, 3, 4, 5, 6, 7].map(
        (e) =>
            `linear-gradient(
            90deg,
            var(--accent-color-${e}) 0%,
            rgba(255, 255, 255, 0.1) 100%
        )`,
    );
</script>

<div
    class={img !== null
        ? "bio-item-columned bio-item"
        : "bio-item-uncolumned bio-item"}
    style="background: {gradients[accent - 1]};"
>
    <div class="bio-item-contents">
        {@render children?.()}
    </div>

    {#if img}
        <div class="image-container" style="background-image: url({img})"></div>
    {/if}
</div>

<style>
    .bio-item-columned {
        display: flex;
        justify-content: space-between;
    }

    .bio-item {
        border-radius: 8px;
        max-width: 490px;
    }

    .bio-item-contents {
        padding: 10px;
        text-align: justify;
        font-size: 18px;
    }

    .image-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 8px 8px 0;
        background-position: center;
        background-size: 300px 300px;
    }
</style>
