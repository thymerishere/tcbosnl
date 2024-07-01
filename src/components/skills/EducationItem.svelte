<script>
    export let title = "title";
    export let time = "time";
</script>

<div class="text-white bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-500 hover:to-indigo-800 rounded-xl shadow-md p-3 m-2 mx-3 text-center">
    <p class="font-bold">{title}</p>
    <p class="font-light">{time}</p>
    <slot />
</div>
