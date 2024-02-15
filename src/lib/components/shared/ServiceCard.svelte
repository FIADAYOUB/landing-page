<script>
  export let service;

  import img1 from "$lib/images/item3.jpg";

  const { title, description, icon } = service;

  let showDescription = false;
</script>

<div
  class="service_card min-h-[480px] h-[480px] w-[380px] max-w-[380px] relative rounded-[20px] bg-[rgba(255,255,255,.1)] p-[5px] border-[1px] border-gray-800"
>
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
    <div class="flip-card-back conceal-answer">
      <div>
        <p>
          {description}
        </p>
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
  .conceal-answer {
    animation: revealTextSlowly 0.3s forwards;
  }
</style>
