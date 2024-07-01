<script>
    export let title = "title"
</script>

<div>
    <p class="text-slate-100 text-2xl md:text-3xl lg:text-4xl text-center font-light mt-5 p-3">
        {title}
    </p>

    <div class="grid grid-cols-1 items-start">

       <slot />
    </div>
</div>
