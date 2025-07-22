import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Export Vite config
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/web/' : '/',
});
