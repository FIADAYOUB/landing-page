<script>
  import ReviewCard from "./ReviewCard.svelte";

  let displayFull = false;
</script>
<section class="reviews text-white bg-black flex flex-col items-center p-4 md:p-20 gap-4">
  <h1>What do our customers say?</h1>
  <div class="{displayFull ? 'h-fit' : 'h-[42em]'} overflow-hidden transition-all duration-1000 ease-in-out">
    <div class="relative bg-gradient-reviews bg-transparent w-full rounded-xl md:px-20 px-2 mt-40 pb-40">
      <!-- TODO -->
      <!-- <div class="absolute -top-10 right-4 p-6 rounded-lg bg-white w-[300px] h-[150px]" /> -->
      <div class="relative inner flex flex-col md:flex-row flex-wrap items-center justify-center ">

        <div class="ti-column md:-top-20">
          {#each {length: 4} as item}
             <ReviewCard />
          {/each}
        </div>

        <div class="ti-column md:-top-40">
          {#each {length: 4} as item}
             <ReviewCard />
          {/each}
        </div>

        <div class="ti-column md:top-40">
          {#each {length: 4} as item}
             <ReviewCard />
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex flex-col md:flex-row items-center justify-center gap-4">
    <button
      type="button"
      class="home_btn bg-secondary-lighten text-black"
    >
      Offer received
    </button>
    <button
      type="button"
      class="home_btn bg-trasparent border border-white"
      on:click={()=> displayFull = !displayFull}
    >
      Read more customer testimonials
    </button>
  </div>
</section>

<style lang="postcss">
	.home_btn {
		@apply text-[20px] px-6 py-2 rounded-lg shadow-3xl w-full md:w-fit
	}
  .ti-column {
    @apply relative grow md:flex-[0_0_33%] max-w-full md:max-w-[33%] flex flex-col items-center gap-2 p-2
  }
</style>