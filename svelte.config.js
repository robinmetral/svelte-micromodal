import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    // alias `svelte-micromodal` to `lib` to make the examples clearer
    vite: {
      resolve: {
        alias: {
          "svelte-micromodal": path.resolve("src/lib"),
        },
      },
    },
  },
};

export default config;
