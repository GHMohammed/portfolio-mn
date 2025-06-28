import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // مهم لمسار الملفات في Vercel
  optimizeDeps: {
    exclude: ["lucide-react"], // استثناء الحزم غير الضرورية
  },
  server: {
    host: "0.0.0.0", // إعدادات التطوير المحلي فقط (لا تؤثر على Vercel)
    port: 5173, // إعدادات التطوير المحلي فقط
  },
  build: {
    outDir: "dist", // تأكد من وجود هذا السطر
  },
});
