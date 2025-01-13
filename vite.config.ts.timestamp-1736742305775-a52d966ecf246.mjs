// vite.config.ts
import { defineConfig } from "file:///D:/EasyBooking/gts-ui/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/EasyBooking/gts-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/EasyBooking/gts-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\EasyBooking\\gts-ui";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/colors" as *;'
      }
    }
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "GTSUI",
      fileName: (format) => `gts-ui.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && /style\.css$/.test(assetInfo.name)) {
            return "gts-ui.css";
          }
          return assetInfo.name || "assets/[name][extname]";
        }
      }
    },
    cssCodeSplit: false,
    cssMinify: true,
    emptyOutDir: true,
    assetsInlineLimit: 4096
    // Only inline files smaller than 4kb
  },
  optimizeDeps: {
    include: ["vue"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxFYXN5Qm9va2luZ1xcXFxndHMtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEVhc3lCb29raW5nXFxcXGd0cy11aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRWFzeUJvb2tpbmcvZ3RzLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHR5cGUgeyBQcmVSZW5kZXJlZEFzc2V0IH0gZnJvbSAncm9sbHVwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpXHJcbiAgICB9XHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQHVzZSBcIkAvYXNzZXRzL2NvbG9yc1wiIGFzICo7J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiAnLi9zcmMvaW5kZXgudHMnLFxyXG4gICAgICBuYW1lOiAnR1RTVUknLFxyXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGd0cy11aS4ke2Zvcm1hdH0uanNgLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbzogUHJlUmVuZGVyZWRBc3NldCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgJiYgL3N0eWxlXFwuY3NzJC8udGVzdChhc3NldEluZm8ubmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdndHMtdWkuY3NzJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIHx8ICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcclxuICAgIGNzc01pbmlmeTogdHJ1ZSxcclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYsIC8vIE9ubHkgaW5saW5lIGZpbGVzIHNtYWxsZXIgdGhhbiA0a2JcclxuICB9LFxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgaW5jbHVkZTogWyd2dWUnXVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UCxTQUFTLG9CQUFvQjtBQUNwUixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUh4QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLFVBQVUsTUFBTTtBQUFBLElBQ3hDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQSxnQkFBZ0IsQ0FBQyxjQUF3QztBQUN2RCxjQUFJLFVBQVUsUUFBUSxjQUFjLEtBQUssVUFBVSxJQUFJLEdBQUc7QUFDeEQsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU8sVUFBVSxRQUFRO0FBQUEsUUFDM0I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsbUJBQW1CO0FBQUE7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLEtBQUs7QUFBQSxFQUNqQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
