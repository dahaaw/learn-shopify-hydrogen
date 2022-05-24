import React from 'react'
import {
    useCart,
    CartLines
} from '@shopify/hydrogen/client';
import { useEffect } from 'react';
import CartItems from './CartItems.client';
  

export default function CanvasCart() {
    const {totalQuantity, lines} = useCart();
    useEffect(() => {
        console.log(lines)
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
                            <div>empty</div> 
                            :
                            <ul className="header-cart__items">
                                <CartLines>
                                    <CartItems />
                                </CartLines>
                            </ul>
                        }
                        
                    </div>
                    {/* End top and products */}
                    {/* Bottom */}
                    <div className="canvas-cart__bottom">
                        {/* Subtotal */}
                        <div className="header-cart__subtotal d-flex">
                        {/* Title */}
                        <div className="subtotal__title">Subtotal</div>
                        {/* End title */}
                        {/* Value */}
                        <div className="subtotal__value">$272.47</div>
                        {/* End value */}
                        </div>
                        {/* End subtotal */}
                        {/* Header cart action */}
                        <div className="header-cart__action">
                        <a href="checkout.html" className="header-cart__button">Checkout</a>
                        <a href="cart.html" className="header-cart__button">View cart</a>
                        </div>
                        {/* End Header cart action */}
                    </div>
                    {/* End bottom */}
                </div>
                {/* End d-flex */}
            </div>
            
            {/* End content */}
        </div>
    )
}