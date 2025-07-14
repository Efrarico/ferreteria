import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: [
      "upload.wikimedia.org",
      "truper.com"
    ]
  },
  compilerOptions: {
    tags: ['swiper-container', 'swiper-slide']
  }

  
});
