import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, FileRoutes, ShopifyProvider, CartProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import CartProviderComponent from './components/CartProviderComponent.client';


function App({routes}) {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <CartProviderComponent>
          {/* <CartProvider> */}
            <Router>
              <FileRoutes routes={routes} />
            </Router>
          {/* </CartProvider> */}
        </CartProviderComponent>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
