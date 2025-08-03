import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@domain": path.resolve(__dirname, "./src/domain"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@infrastructure": path.resolve(__dirname, "./src/infrastructure"),
      "@providers": path.resolve(__dirname, "./src/providers"),
    },
  },
});
