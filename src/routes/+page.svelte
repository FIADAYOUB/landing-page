<script>
  import Features from '$lib/components/sections/Features.svelte';
  import Reviews from '$lib/components/sections/Reviews.svelte';
  import Services from '$lib/components/sections/Services.svelte';

</script>
<div class="page-index font-poppins">
	<div class="page-content">
		<section class="home-section h-[90vh] relative py-2 px-[5%] text-white bg-secondary-base md:bg-[url($lib/images/homepage.png)] bg-cover" id="home-section">
			<div class="home_wrapper w-[90%] my-5 mx-auto max-w-[1200px] text-left bg-transparent">
				<div class="flex flex-col-reverse md:flex-row items-center">
					<div class="homepage_hero-text max-w-[600px] mt-4 md:mt-[100px] md:mb-[140px] flex flex-col items-start gap-4">
						<h1 class="text-[2.5em] font-bold text-center mb-3 font-poppins">We are a landing page</h1>
						<p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
						<div class="w-full flex flex-col md:flex-row items-center gap-4">
							<button
								type="button"
								class="home_btn bg-secondary-lighten text-white"
							>
								Join now
							</button>
							<button
								type="button"
								class="home_btn text-secondary-base bg-white"
							>
								Learn more
							</button>
						</div>
					</div>
					<div class="homepage_hero-content relative grow h-[350px] w-[350px] md:w-full md:h-[600px] bg-[url($lib/images/homepage-sm.png)] bg-cover md:bg-none rounded-full ">
						<div class="absolute -top-6 md:top-4 left-6 md:left-0 flex flex-col gap-2 md:gap-3">
							<div class="flex items-center gap-1 md:gap-4">
								<div class="avatar">
									<img src="" alt="" class="bg-white h-10 md:h-14 w-10 md:w-14 rounded-full">
								</div>
								<h3>Dr. Pero</h3>
								<p class="text-xs opacity-70">52 min ago</p>
							</div>
							<div class="bg-gray-100 rounded-lg p-2 max-w-[250px] text-black text-xs md:text-sm">
								Great news - your latest labs show significant improvement
							</div>
							<div class="bg-primary-base rounded-lg p-2 w-fit text-xs md:text-sm ml-16">
								Feels good! Thanks Dr. Pero
							</div>
						</div>
						<div class="absolute -right-8 md:right-0 bottom-20 bg-white text-black rounded-lg p-2 md:p-4">
							<ul>
								<li class="pb-1 md:pb-2 border-b border-b-gray-300 flex items-center justify-start gap-3">
									<img src="" alt="" class="avatar bg-primary-base h-10 w-10 rounded-full">
									<div class="grow text-xs">
										<div class="font-medium">Performance indicator</div>
										<div class="flex items-center justify-between w-full">
											<div class="font-bold">VO2 Max: 42</div>
											<p class="text-success-base font-bold">+12%</p>
										</div>
									</div>
								</li>
								<li class="flex items-center justify-start gap-3 mt-1 md:mt-2">
									<img src="" alt="" class="avatar bg-primary-base h-10 w-10 rounded-full">
									<div class="grow text-xs">
										<div class="font-medium">Key Biomarker</div>
										<div class="flex items-center justify-between w-full">
											<div class="font-bold">ApoB: 55</div>
											<p class="text-success-base font-bold">+7%</p>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div class="absolute -left-8 md:left-0 bottom-0 bg-white text-black rounded-lg p-2 md:p-4 max-w-[230px] md:max-w-[280px]">
							<div class="flex items-center justify-start gap-3">
								<img src="" alt="" class="avatar bg-primary-base h-10 w-10 min-w-10 rounded-full">
								<div class="grow text-xs">
									<p>View your updated recomendations for medication & supplements</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>

		<!-- <Features /> -->
		<div class="p-20 md:p-32 bg-black">
			<Services />
		</div>
		<Reviews />
	</div>
</div>

<style lang="postcss">
	.sticker {
		@apply font-poppins font-bold absolute shadow-3xl transition-all duration-500 ease-in text-[1.2em] sm:text-[3em] flex items-center justify-center text-center hover:scale-110;
	}
	.home_btn {
		@apply text-[20px] px-6 py-2 rounded-lg shadow-3xl w-full
	}
</style>