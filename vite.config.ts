import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  appType: 'spa',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-router-dom')) {
            return 'vendor-router';
          }
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-ui';
          }
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/sonner')) {
            return 'vendor-icons';
          }
          if (id.includes('node_modules/react-hook-form') || id.includes('node_modules/zod')) {
            return 'vendor-forms';
          }
          if (id.includes('node_modules/@tanstack') || id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge')) {
            return 'vendor-utils';
          }
          
          // Page chunks
          if (id.includes('/pages/ServicePage')) {
            return 'page-service';
          }
          if (id.includes('/pages/Contact')) {
            return 'page-contact';
          }
          if (id.includes('/pages/About')) {
            return 'page-about';
          }
          if (id.includes('/pages/PrivacyPolicy')) {
            return 'page-privacy';
          }
          
          // Component chunks for heavy components
          if (id.includes('/components/ImageShowcase')) {
            return 'components-showcase';
          }
          if (id.includes('/components/HeroSlider') || id.includes('/components/ServiceCategories')) {
            return 'components-main';
          }
        },
      },
    },
    chunkSizeWarningLimit: 300,
  },
  server: {
    port: 5173,
    middlewareMode: false,
    // Ensure all non-existent routes fall back to index.html
    historyApiFallback: true,
  },
});
