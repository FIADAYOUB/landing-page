<script>
  import { particlesConfig } from '$lib/constants/particles'
  import Services from './Services.svelte';
	import '$lib/constants/particles';
	import Particles, { particlesInit } from '@tsparticles/svelte';
  //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
  import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

  let onParticlesLoaded = (event) => {
      const particlesContainer = event.detail.particles;

      // you can use particlesContainer to call all the Container class
      // (from the core library) methods like play, pause, refresh, start, stop
  };

  void particlesInit(async (engine) => {
      // call this once per app
      // you can use main to customize the tsParticles instance adding presets or custom shapes
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
  });
</script>
<div class="page-index">
	<div class="page-content">
		<Particles
			id="tsparticles"
			class="put your classes here"
			style=""
			options="{particlesConfig}"
			on:particlesLoaded="{onParticlesLoaded}"
			/>
		<section class="index-header h-[80vh] relative py-2 px-[5%] bg-secondary-base text-white" id="particles-js">
			<div class="headline-container h-full w-full flex flex-1 flex-col justify-center items-center max-w-[400px] mx-auto">
				<h1 class="text-[3em] font-bold text-center mb-3 font-poppins">WE ARE A LANDING PAGE</h1>
				<p class="text-center">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
			</div>
			<div class="header-visual-index absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
				<div class="sticker w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] bottom-[80px] sm:bottom-[180px] -left-[40px] sm:-left-[60px] -rotate-[30deg] rounded-full bg-tertiary-base text-secondary-base">
					We
				</div>
				<div class="sticker w-[80px] h-[80px] sm:w-[160px] sm:h-[160px] bottom-[20px] sm:bottom-[60px] left-[0px] rounded-full bg-white text-primary-base -z-10">
					Are a
				</div>
				<div class="sticker uppercase -bottom-[10px] left-[50px] sm:left-[100px] rotate-6 px-8 py-4 rounded-full bg-tertiary-base text-secondary-base">
					Landing page
				</div>
			</div>
		</section>

		<Services />

	</div>
</div>

<style lang="postcss">
	.sticker {
		@apply font-poppins font-bold absolute shadow-3xl transition-all duration-500 ease-in text-[1.2em] sm:text-[3em] flex items-center justify-center text-center hover:scale-110;
	}
</style>