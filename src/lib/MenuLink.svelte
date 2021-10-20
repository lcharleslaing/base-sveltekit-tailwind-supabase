<script>
  export let href;
  export let name;
</script>

<div class="flex">
  <a sveltekit:prefetch {href} class="mx-1 p-2 hover:bg-gray-100 rounded-lg"
    >{name}</a
  >
</div>
