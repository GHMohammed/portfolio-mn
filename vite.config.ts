import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    host: "0.0.0.0", // <<< يسمح بفتح الموقع من أي جهاز على الشبكة
    port: 5173, // <<< يمكن تغييره إذا أردت
  },
});
