import { CartProvider } from '@shopify/hydrogen/client'
import React from 'react'
import { createContext } from 'react';

export const CartContext = createContext(null);

export default function CartProviderComponent({children, numCartLines}) {
  return (
        <CartProvider numCartLines={numCartLines}>
            {children}
        </CartProvider>
  )
}
