<script>
  import { gsap, Power2 } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  const duration = 1;
  let image;
  let list;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    tweenIn();
  });

  function tweenIn() {
    let tl = gsap.timeline({
      scrollTrigger: {
        toggleActions: "restart pause resume pause",
      },
    });

    tl.from(".image-container", 1.5, {
      xPercent: -100,
      scale: 1.2,
      delay: -1,
      ease: Power2.out,
    });
    tl.staggerFromTo(".features > li", 4, { x: 1000 }, { x: 0 }, 0.5, 0);

    return {
      duration: duration * 1000,
      tick: (t) => {
        tl.progress(t);
      },
    };
  }
</script>

<section id="services" class="py-4 md:py-10">
  <div class="space-y-10 md:sapce-y-12 text-white">
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <h1 class="text-secondary-lighten font-bold text-3xl">
        Scroll gsap animation
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div
      class="containers w-full h-[80vh] px-8 relative flex flex-col md:flex-row mx-auto gap-4"
    >
      <div
        class="image-container h-[40vh] w-full md:w-[50vw] object-cover bg-cover bg-[url('https://images.unsplash.com/photo-1551522355-dbf80597eba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')]"
      />
      <ul class="features text-center">
        {#each { length: 5 } as _}
          <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
</style>
