<script>
    export let title = "title";
    export let experience = "exp";
    export let percent = "";
    export let style = `bg-gradient-to-l from-cyan-500 via-cyan-500 ${percent} rounded-r-lg h-full flex items-center text-right pr-2`;
</script>

<div class="grid grid-cols-2 bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-500 hover:to-indigo-800 rounded-xl shadow-md m-2 mx-3 h-12">
    <div class="text-white my-auto mx-2">
        <span class="font-bold">{title}</span>
    </div>
    <div class="bg-gradient-to-r from-black rounded-r-xl">
        <div class={style}>
            <span class="text-white w-full">
                {experience}
            </span>
        </div>
    </div>
</div>
