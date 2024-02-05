<script>
  export let service;
  const {title, description, icon} = service;
</script>

<div class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden transition-all duration-300 ease-in hover:scale-105">
    <div class="rounded-xl bg-tertiary-base dark:bg-gray-950 p-3 text-heading-1 w-max relative">
       {@html icon}
    </div>
    <div class="mt-6 space-y-4 relative">
        <h2 class="text-lg md:text-xl font-semibold text-heading-2">
            {title}
        </h2>
        <p>
            {description}
        </p>
    </div>
    <span class="absolute w-32 aspect-square -bottom-16 -right-16 bg-tertiary-base rounded-full"></span>
</div>