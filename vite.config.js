import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
      },
    },
  },

  server: {
    proxy: {
      "/json": {
        target: resolve(__dirname, "src/json"),
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/json/, ""),
      }
    }
  }
});
