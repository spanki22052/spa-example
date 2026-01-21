import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@types": path.resolve(__dirname, "./src/@types"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles")
    }
  },
  server: {
    host: "0.0.0.0",
    port: 8080
  },
  build: {
    sourcemap: true
  }
})


