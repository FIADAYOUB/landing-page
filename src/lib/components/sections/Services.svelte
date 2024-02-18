<script>
  import ServiceCard from "../shared/ServiceCard.svelte";
  import { services } from "$lib/constants";
</script>

<section id="services" class="py-4 md:py-10">
  <div class="space-y-10 md:sapce-y-12 text-white">
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <h1 class="text-secondary-lighten font-bold text-3xl">What we offer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="flex flex-wrap gap-[2.5em] items-center justify-center">
      {#each services as service}
        <ServiceCard {service} />
      {/each}
    </div>
  </div>
</section>
