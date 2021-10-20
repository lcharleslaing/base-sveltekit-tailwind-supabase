<script>
  import BrandLogo from "$lib/BrandLogo.svelte";
  export let href;
  export let brand;
</script>

<div>
  <a {href} class="flex">
    <BrandLogo src="big2tiny-logo.svg" alt="Logo" iconsize="10" />
    <span class="flex items-center pl-2 font-extrabold text-2xl">{brand}</span>
  </a>
</div>
