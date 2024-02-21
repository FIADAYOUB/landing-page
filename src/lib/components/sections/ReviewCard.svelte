<script>
  import Icon from '@iconify/svelte';

</script>
<div class="p-6 rounded-lg bg-black border border-[#232323]">
  <div class="flex items-center gap-4">
    <div class="bg-secondary-base h-10 w-10 rounded-full flex items-center justify-center">
      M
    </div>
    <div>
      <h3>Ayoub</h3>
      <p class="text-xs opacity-70">16. Janvier, 2024</p>
    </div>
  </div>
  <div class="stars flex items-center justify-center gap-1 text-secondary-lighten my-4">
    {#each {length: 5} as item}
       <Icon icon="material-symbols:star" />
    {/each}
  </div>
  <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
  <p class="opacity-50">Continue reading</p>
</div>