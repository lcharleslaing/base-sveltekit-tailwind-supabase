<script context="module">
  import { page } from "$app/stores";

  export const load = async ({ page, fetch }) => {
    const id = page.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const post = await res.json();
    return {
      props: {
        post,
      },
    };
  };
</script>

<script>
  export let post;
</script>

<div class="grid grid-cols-1 mx-12">
  <div class="col-span-1">
    <h2>{post.title}</h2>
    <div class="my-4">
      <p class="text-left">Created: 10/10/2021</p>
    </div>
    <p class="text-justify">{post.body}</p>
    <p class="text-right my-4">By: Lee Charles Laing</p>
  </div>
</div>
