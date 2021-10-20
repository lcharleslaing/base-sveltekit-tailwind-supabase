<script>
  import MenuIcon from "$lib/MenuIcon.svelte";
  import BrandIcon from "$lib/BrandIcon.svelte";
  import MenuLink from "$lib/MenuLink.svelte";
  import SettingsIcon from "$lib/SettingsIcon.svelte";
</script>

<div class="navbar dark">
  <div class="flex">
    <MenuIcon />
    <BrandIcon brand="BLOG" href="." />
  </div>
  <div class="navlinks">
    <MenuLink href="." name="Home" />
    <MenuLink href="/blog" name="Blog" />
    <MenuLink href="/about" name="About" />
    <MenuLink href="/portfolio" name="Portfolio" />
  </div>
  <div class="px-4">
    <SettingsIcon />
  </div>
</div>
