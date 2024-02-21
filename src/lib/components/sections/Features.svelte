<script>
  import { browser } from "$app/environment";
  import img1 from "$lib/images/item1.jpg";
  import img2 from "$lib/images/item2.jpg";
  import img3 from "$lib/images/item3.jpg";
  import img4 from "$lib/images/item4.jpg";
  import { onMount } from "svelte";

  let items = [
    { title: "title 1", img: img1 },
    { title: "title 2", img: img2 },
    { title: "title 3", img: img3 },
    { title: "title 4", img: img4 }
  ];
  onMount(async ()=> {
    let module = await import("swiper/element/bundle")
    module.register();
  })
</script>

<section class="main-content h-[80vh] text-white">
  <div class="text-center max-w-3xl mx-auto space-y-4">
    <h1 class="text-secondary-lighten font-bold text-3xl">Swiper</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="show-case py-8 px-1 md:px-[calc(5%+20px)] flex justify-center w-full h-[350px] md:h-[450px] overflow-hidden">
    <swiper-container
      navigation={true}
      pagination={true}
      slides-per-view="auto"
      space-between={30}
      centered-slides={true}
      class="w-full"
      autoplay={true}
      init={true}
    >
      {#each items as item}
        <swiper-slide
            class="service-card mx-4 flex flex-col relative overflow-hidden rounded-lg w-[150px] md:h-[350px] md:w-[250px] h-[250px] text-white hover:text-primary transition-colors group"
          >
            <img
              src={item.img}
              alt={item.title}
              class="z-0 w-full h-full object-cover transform transition-transform delay-300 group-hover:scale-[1.3]"
            />
            <div class="card-info">
              <h2 class="font-bold text-2xl">{item.title}</h2>
            </div>
        </swiper-slide>
      {/each}
    </swiper-container>
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
    @apply bg-gradient-top;
  }
  .service-card::after {
    @apply bg-gradient-bottom;
  }
  .service-card:hover::before,
  .service-card:hover::after {
    @apply h-0 w-0;
  }
</style>
