<script>
	import "../app.css";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
