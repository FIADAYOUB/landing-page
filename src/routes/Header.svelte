<script>
  import Icon from '@iconify/svelte';
  import { navLinks } from "$lib/constants";
  import { slide } from "svelte/transition";

  let active = navLinks[0].id;
  let toggle = false;
  let scrollY = 0;

</script>
<svelte:window bind:scrollY />
<div class:costum-header={scrollY > 100} class="sm:px-16 px-6 flex justify-center items-center bg-secondary-base w-full sticky top-0 z-10">
  <div class="max-w-[1280px] w-full">
    <nav class="w-full flex sm:py-6 py-2 justify-between items-center navbar">
      <h1 class="text-white">LOGO</h1>
      <ul class="list-none sm:flex hidden justify-end items-center flex-1">
        {#each navLinks as nav}
          <li
            class={`group font-poppins cursor-pointer text-[16px] mr-10 last:mr-0
            ${ active === nav.id ? "text-primary-base font-semibold" : "text-tertiary-base font-regular"}`}
          >
            <a
              href={`/${nav.id}`}
              on:click={() => active = nav.id}
            >
              {nav.title}
            </a>
            <div
              class="h-0.5 bg-primary-base scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            />
          </li>
        {/each}
      </ul>

      <div class="sm:hidden flex flex-1 justify-end items-center">
        <button
          class="w-8 h-8 rounded-full flex items-center justify-center text-white"
          on:click={() => toggle = !toggle}
        >
          <Icon icon={toggle ? "material-symbols:close" : "uil:bars"} width="2.5em" height="2.5em"/>
        </button>
        {#if toggle}
          <div
            transition:slide
            class="absolute top-12 right-0 left-0 z-10 w-full p-6 bg-white sidebar"
          >
            <ul class="list-none flex justify-end items-start flex-1 flex-col">
              {#each navLinks as nav, index}
                <li
                  class={`font-poppins font-medium cursor-pointer text-[16px] mb-4 last:mb-0
                          ${active === nav.id ? "text-primary-base" : "text-secondary-base"}`
                        }
                >
                  <a
                    href={`/${nav.id}`}
                    on:click={() => active = nav.id}
                  >
                    {nav.title}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </nav>
  </div>
</div>

<style lang="postcss">
  .costum-header {
    @apply bg-secondary-base/80 transition-all duration-200;
  }
</style>