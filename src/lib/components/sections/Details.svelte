<script>
  import { gsap, Power2 } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  console.log({ ScrollTrigger });

  const duration = 1;
  let visible = true;
  let image;
  let mask;
  // let Power2, ScrollTrigger;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    tweenIn()
  });

  function tweenIn() {
    let tl = gsap.timeline({
      scrollTrigger: {
        toggleActions: "restart pause resume pause",
      },
    });

    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });

    return {
      /* GSAP's duration is in seconds. Svelte's is in miliseconds */
      duration: duration * 1000,
      tick: (t) => {
        tl.progress(t);
      },
    };
  }
</script>

<section id="services" class="py-4 md:py-10 bg-gray-700">
  <div class="space-y-10 md:sapce-y-12 text-white">
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <h1 class="text-secondary-lighten font-bold text-3xl">Who are we</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="containers">
      <div class="img_container">
        <div class="mask">
          <label class="text-white">
            <input type="checkbox" bind:checked={visible} />
            visible
          </label>
          {#if visible}
            <!-- content here -->
          {/if}
          <div class="center-container" bind:this={image} in:tweenIn />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .containers {
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
  }
  .center-container {
    position: absolute;
    top: 25vh;
    left: 15vw;
    height: 50vh;
    width: 40vw;
    background-image: url("https://images.unsplash.com/photo-1551522355-dbf80597eba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background-size: cover;
    -webkit-box-shadow: 7px 29px 49px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 7px 29px 49px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 7px 29px 49px 0px rgba(0, 0, 0, 0.5);
  }
  @keyframes go-left {
    0% {
      left: 0;
      width: 0%;
    }
    50% {
      left: 0;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 0;
    }
  }
</style>
