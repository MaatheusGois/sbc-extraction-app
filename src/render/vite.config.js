import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // base: process.env.NODE_ENV === 'production' ? '/extraction-vue/' : '/',
};
