<script>
    let { children, title } = $props();
</script>

<div class="skill-column">
    <h4>
        {title}
    </h4>

    <div class="skill-items">
        {@render children?.()}
    </div>
</div>

<style>
    .skill-column {
        flex: 1;
        max-width: 600px;
        min-width: 300px;
    }

    .skill-items {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
</style>
