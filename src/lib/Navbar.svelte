<script>
  import MenuIcon from "$lib/MenuIcon.svelte";
  import BrandIcon from "$lib/BrandIcon.svelte";
  import MenuLink from "$lib/MenuLink.svelte";
</script>

<div class="navbar items-center justify-between">
  <div class="flex">
    <MenuIcon />
    <BrandIcon brand="BIG2TINY" href="." />
  </div>
  <div class="flex">
    <MenuLink href="." name="Home" />
    <MenuLink href="/about" name="About" />
    <MenuLink href="/portfolio" name="Portfolio" />
  </div>
  <div>
    <MenuIcon />
  </div>
</div>
