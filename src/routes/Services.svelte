<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
  import img1 from '$lib/images/item1.jpg';
  import img2 from '$lib/images/item2.jpg';
  import img3 from '$lib/images/item3.jpg';
  import img4 from '$lib/images/item4.jpg';
  let carousel;

</script>
<section class="main-content h-[80vh]">
  <div class="show-case py-8 px-[calc(5%+20px)] flex justify-center">
    <!-- {#if browser}
      <Carousel
        bind:this={carousel}
      >
    </Carousel>
    {/if} -->
    <div class="category-card flex flex-col relative overflow-hidden rounded-lg w-[150px] md:w-[200px] h-[300px] text-white hover:text-primary bg-red-600 transition-colors group">
      <img src={img1} alt="" class="z-0 w-full h-full object-cover transform transition-transform delay-300 group-hover:scale-[1.3]" />
    </div>
  </div>
</section>

<style lang="postcss">
  .category-card::before {
    @apply bg-gradient-top content-[""] absolute top-0 left-0 w-full h-full transition duration-1000 ease-in-out z-10;
  }
  .category-card:hover::before {
    @apply w-0 h-0;
  }
  .category-card::after {
    @apply bg-gradient-bottom content-[""] absolute top-0 left-0 w-full h-full transition duration-1000 ease-in-out z-10;
  }
</style>