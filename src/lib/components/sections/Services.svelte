<script>
  import ServiceCard from "../shared/ServiceCard.svelte";
import { services } from "$lib/constants";
</script>
<section id="services">
  <div class="space-y-10 md:sapce-y-12">
      <div class="text-center max-w-3xl mx-auto space-y-4">
          <h1>
              What we offer
          </h1>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {#each services as service}
          <ServiceCard {service} />
        {/each}
      </div>
  </div>
</section>