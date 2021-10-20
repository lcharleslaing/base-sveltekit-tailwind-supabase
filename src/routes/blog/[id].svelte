<script context="module">
  import { page } from "$app/stores";

  export const load = async ({ page, fetch }) => {
    const id = page.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(page);

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

<div class="container mx-24 w-full">
  <h2>{post.title}</h2>
  <p>{post.body}</p>
</div>
