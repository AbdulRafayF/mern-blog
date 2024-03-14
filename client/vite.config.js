import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mern-blog-backend-git-main-sahara-des-projects.vercel.app/",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
