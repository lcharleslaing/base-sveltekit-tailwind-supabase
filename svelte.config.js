import vercel from "@sveltejs/adapter-vercel";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: "#svelte",
    adapter: vercel(),
    adapter: adapter(), // currently the adapter does not take any options
  },
};

export default config;
