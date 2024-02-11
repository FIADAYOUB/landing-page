<script>
  let displayFull = true;
</script>
<section class="reviews text-white bg-black flex flex-col items-center p-20 gap-4">
  <h1>What do our customers say?</h1>
  <div class="{displayFull ? 'h-[1200px]' : 'h-[32em]'} bg-gradient-reviews bg-transparent w-full rounded-xl">
    <div class="inner "></div>
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
</style>