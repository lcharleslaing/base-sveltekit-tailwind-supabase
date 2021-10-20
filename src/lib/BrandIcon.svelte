<script>
  import BrandLogo from "$lib/BrandLogo.svelte";
  export let href;
  export let brand;
</script>

<div>
  <a {href} class="flex">
    <BrandLogo src="svelte_logo.png" alt="Logo" iconsize="8" />
    <BrandLogo src="svelte_ninja_logo.svg" alt="Logo" iconsize="12" />
    <span class="brand flex items-center pl-2 font-extrabold text-2xl"
      >{brand}</span
    >
  </a>
</div>

<style>
  .brand {
    color: #ff5826;
  }
</style>
