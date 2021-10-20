<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  };
</script>

<script>
  import NinjaTitle from "$lib/NinjaTitle.svelte";

  export let posts;
</script>

<NinjaTitle brand="Blog" sveltesize="16" logosize="24" textsize="4" />
<div class="posts">
  {#each posts as post}
    <div class="post">
      <h3>{post.title.substring(0, 20)}...</h3>
      <p>{post.body.substring(0, 100)}...</p>
      <p class="readlink mt-4">
        <a sveltekit:prefetch href={`/blog/${post.id}`}>Read more...</a>
      </p>
    </div>
  {/each}
</div>
