import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost',  // Apache server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/project-noteflow'), // maps /api/test.php -> /project-noteflow/test.php
      }
    }
  }
});
