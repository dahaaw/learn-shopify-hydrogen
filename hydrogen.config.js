import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  routes: import.meta.globEager('./src/routes/**/*.server.[jt](s|sx)'),
  shopify: {
    storeDomain: 'dahaaw-hydrogen.myshopify.com',
    storefrontToken: '9aa23410f870685d6643dda28f7fd91f',
    storefrontApiVersion: '2022-07',
  },
});