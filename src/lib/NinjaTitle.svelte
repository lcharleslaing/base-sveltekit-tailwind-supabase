<script>
  import BrandLogo from "$lib/BrandLogo.svelte";
  export let sveltesize;
  export let logosize;
  export let textsize;
</script>

<div class="flex items-center justify-center my-6">
  <span class="brand flex items-center p-2 font-extrabold text-{textsize}xl"
    >Ninja Blog</span
  >
  <BrandLogo src="svelte_logo.png" alt="Logo" iconsize={sveltesize} />
  <BrandLogo src="svelte_ninja_logo.svg" alt="Logo" iconsize={logosize} />
  <span class="brand flex items-center p-2 font-extrabold text-{textsize}xl"
    >Tutorials</span
  >
</div>
