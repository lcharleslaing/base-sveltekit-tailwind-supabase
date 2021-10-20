<script>
  import BrandLogo from "$lib/BrandLogo.svelte";
  export let brand;
  export let sveltesize;
  export let logosize;
  export let textsize;
</script>

<div class="flex items-center justify-center my-6">
  <BrandLogo src="svelte_logo.png" alt="Logo" iconsize={sveltesize} />
  <span class="brand flex items-center pl-2 font-extrabold text-{textsize}xl"
    >{brand}</span
  >
  <BrandLogo src="svelte_ninja_logo.svg" alt="Logo" iconsize={logosize} />
</div>
