<script>
    let { title, experience, percentage } = $props();
</script>

<div class="skill-bar">
    <div class="progress-bar" style="width: {percentage}%;">
        <p class="skill-title">
            {title} <span class="skill-experience">({experience})</span>
        </p>
    </div>
</div>

<style>
    .skill-bar {
        height: 40px;
        width: 100%;
        min-width: 300px;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.2) 0%,
            var(--accent-color-1) 100%
        );

        border-radius: 8px;
    }

    .progress-bar {
        display: flex;
        height: 100%;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 25%,
            var(--accent-color-2) 100%
        );
        border-radius: 8px;
    }

    .skill-title {
        margin: auto auto auto 8px;
        white-space: nowrap;
        font-weight: 600;
    }

    .skill-experience {
        font-weight: 200;
    }
</style>
