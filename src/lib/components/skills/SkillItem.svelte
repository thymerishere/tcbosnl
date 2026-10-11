<script>
    let { title, experience, percentage } = $props();
</script>

<div class="skill-bar">
    <div class="progress-bar" style="width: {percentage}%;">
        <p class="skill-title">{title} {experience}</p>
    </div>
</div>

<style>
    .skill-bar {
        height: 40px;
        width: 100%;
        min-width: 300px;
        background-color: var(--accent-color-3);
        border-radius: 8px;
    }

    .progress-bar {
        display: flex;
        height: 100%;
        background-color: var(--accent-color-7);
        border-radius: 8px;
    }

    .skill-title {
        margin: auto auto auto 8px;
        white-space: nowrap;
        font-weight: 600;
    }
</style>
