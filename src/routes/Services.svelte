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
    <div class="service-card flex flex-col relative overflow-hidden rounded-lg w-[150px] md:w-[200px] h-[300px] text-white hover:text-primary transition-colors group">
      <img src={img1} alt="" class="z-0 w-full h-full object-cover transform transition-transform delay-300 group-hover:scale-[1.3]" />
      <div class="card-info">
        <h2 class="font-bold text-2xl">Title</h2>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .card-info {
    @apply absolute z-20 bottom-1 w-full flex flex-col justify-center items-center transition-colors duration-1000;
  }
  .service-card:hover .card-info {
    @apply text-white;
  }
  .service-card::before {
    @apply content-[""] absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out z-10;
  }
  .service-card::after {
    @apply content-[""] absolute bottom-0 right-0 w-full h-full transition-all duration-1000 ease-in-out z-10;
  }
  .service-card::before {
    @apply  bg-gradient-top;
  }
  .service-card::after {
    @apply  bg-gradient-bottom;
  }
  .service-card:hover::before, .service-card:hover::after {
    @apply h-0 w-0;
  }
</style>