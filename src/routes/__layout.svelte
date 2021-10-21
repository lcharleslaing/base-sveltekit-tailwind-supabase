<script>
  import Navbar from "$lib/Navbar.svelte";
</script>

<svelte:head>
  <title>Svelte Ninja Blog</title>
  <link rel="stylesheet" href="/styles.css" />
  <link rel="stylesheet" href="src/app.css" />
</svelte:head>
<div>
  <Navbar />
  <slot />
</div>

<style>
</style>
