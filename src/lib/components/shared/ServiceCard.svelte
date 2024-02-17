<script>
  export let service;

  import img1 from "$lib/images/item3.jpg";
  import Icon from "@iconify/svelte";

  const { title, description, icon } = service;

  let showDescription = false;
  let onHover = false;
  let spin = false;

  function handleDescription() {
    showDescription = !showDescription
    spin = true;
    setTimeout(()=>{
      spin = false;
    }, 1000)
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mouseenter={() => (onHover = true)}
  on:mouseleave={() => (onHover = false)}
  class="service_card min-h-[480px] h-[480px] w-[380px] max-w-[380px] relative rounded-[20px] bg-[rgba(255,255,255,.1)] p-[5px] border-[1px] border-gray-800"
>
    <button
      type="button"
      on:click={handleDescription}
      class:animate-spin={spin}
      class="absolute -top-3 -right-3 z-20 {onHover ? 'opacity-100' : 'opacity-0'} {showDescription ? 'text-white bg-secondary-base' : 'bg-white text-secondary-base'} transition-all duration-500 ease-in-out flex items-center justify-center h-12 w-12 text-[20px] rounded-full"
    >
      <Icon icon="fa-solid:sync" />
    </button>
  <div class="flip-card-inner" class:flip-it={showDescription}>
    <div
      class="service_card-front bg-[#090121] rotate-0 flex flex-col w-full h-full rounded-[20px] border-[1px] border-gray-800"
    >
      <div class="service_card-image">
        <img src={img1} alt="" class="h-full w-full bg-cover object-cover" />
      </div>
      <div class="service__card-content">
        <div class="service_card-title text-stroke">
          {title}
        </div>
      </div>
    </div>
    <div class="flip-card-back">
      <div>
        {@html description}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .service_card-image {
    @apply absolute top-0 left-0 right-0 bottom-0 opacity-50 overflow-hidden rounded-[20px] grayscale-[50%] transition-all duration-500 ease-in-out;
  }
  .flip-it {
    transform: rotateY(180deg);
  }
  .flip-card-inner {
    @apply relative w-full h-full text-center flex items-center justify-center bg-black rounded-[20px];
  }
  .flip-card-inner {
    transition: transform 0.4s;
    transform-style: preserve-3d;
  }
  .service_card:hover .service_card-image {
    @apply opacity-100 grayscale-0;
  }
  .service__card-content {
    @apply relative w-full flex flex-col items-center justify-center rounded-[20px] transition-all duration-300 ease-in h-full;
  }

  .service__card-content::before {
    @apply absolute top-0 right-0 left-0 bottom-0 content-['']  transition-all duration-300 ease-in;
  }
  .text-stroke {
    -webkit-text-stroke: 1px #090121;
  }
  .service_card-title {
    @apply flex items-center justify-center text-center font-paytone font-medium text-[2em];
  }
  .flip-card-back {
    @apply absolute w-full h-full flex items-center justify-center bg-black p-6 rounded-[20px];
  }
  .flip-card-back {
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }
</style>
