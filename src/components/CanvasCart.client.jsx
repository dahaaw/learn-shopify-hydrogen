import React from 'react'
import {
    useCart,
    CartLines,
    CartEstimatedCost,
    CartCheckoutButton
} from '@shopify/hydrogen/client';
import { useEffect } from 'react';
import CartItems from './CartItems.client';
  

export default function CanvasCart() {
    const {totalQuantity, lines} = useCart();
    useEffect(() => {
        console.log('cart updated')
    }, [lines]);
    
    return (
        <div className="canvas-cart js-canvas-cart">
            <div className="canvas-cart__overlay js-close-canvas-cart" />
            {/* Content */}
            <div className="canvas-cart__content">
                {/* D-flex */}
                <div className="canvas-cart__d-flex">
                    {/* Top and products */}
                    <div className="canvas-cart__top-and-products">
                        {/* Heading */}
                        <div className="canvas-cart__heading d-flex align-items-center">
                        {/* H3 */}
                        <h3 className="canvas-cart__h3">Cart {totalQuantity > 0 && <>({totalQuantity})</>}</h3>
                        {/* End h3 */}
                        {/* Close */}
                        <div className="canvas-cart__close"><a href="#" className="js-close-canvas-cart"><i className="lnil lnil-close" /></a></div>
                        {/* End close */}
                        </div>  
                        {/* End heading */}
                        {totalQuantity === 0 ? 
                            <div>
                                <div className="text-center">Your cart is empty</div> 
                            </div>
                            :
                            <ul className="header-cart__items">
                                <CartLines>
                                    <CartItems />
                                </CartLines>
                            </ul>
                        }
                        
                    </div>
                    {/* End top and products */}
                    {totalQuantity > 0 && 
                        <div className="canvas-cart__bottom">
                        {/* Bottom */}
                            {/* Subtotal */}
                            <div className="header-cart__subtotal d-flex">
                                <div className="subtotal__title">Subtotal</div>
                            <div className="subtotal__value"><CartEstimatedCost amountType='subtotal' /></div>
                            </div>
                            {/* End subtotal */}

                            {/* Header cart action */}
                            <div className="header-cart__action">
                                <CartCheckoutButton className="header-cart__button">
                                    Checkout
                                </CartCheckoutButton>
                            </div>
                            {/* End Header cart action */}
                        {/* End bottom */}
                        </div>
                    }
                </div>
                {/* End d-flex */}
            </div>
            
            {/* End content */}
        </div>
    )
}