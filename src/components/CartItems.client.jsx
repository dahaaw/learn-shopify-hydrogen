import { 
  useCartLine,
  CartLineImage,
  CartLineQuantity,
  CartLineQuantityAdjustButton
} from '@shopify/hydrogen/client'
import React from 'react'

export default function CartItems() {
  const {merchandise, quantity} = useCartLine();
  // console.log({merchandise})
  return (
    
        <li className="cart-item d-flex">
            {/* Item image */}
            <p className="cart-item__image cart-item__image--ratio-100-122">
            <a href="product.html">
                <img alt="Image" data-sizes="auto" data-srcset={`${merchandise.image.url} 400w,
                    ${merchandise.image.url} 800w`} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
            </a>
            </p>
            {/* End item image */}
            {/* Item details */}
            <p className="cart-item__details">
            <a href="product.html" className="cart-item__title">{merchandise.product.title}</a>
            <span className="cart-item__variant">{merchandise.title}</span>
            <span className="cart-ietm__price"><CartLineQuantity /> <i>x</i> {merchandise.priceV2.amount} {merchandise.priceV2.currencyCode}</span>
            </p>
            {/* End item details */}
            {/* Item quantity */}
            <div className="cart-item__quantity">
            <div className="cart-product__quantity-field d-flex">
                {/* <div className="quantity-field__minus js-quantity-down"><a href="#">-</a></div> */}
                <CartLineQuantityAdjustButton className='bg-transparent' style={{ 'width': '50px' }} adjust="decrease">
                  -
                </CartLineQuantityAdjustButton>
                <div className='border border-black text-center' style={{ 'width': '70px' }}>
                  <CartLineQuantity className='text-center' />
                </div>
                <CartLineQuantityAdjustButton className='bg-transparent' style={{ 'width': '50px' }} adjust="increase">
                  +
                </CartLineQuantityAdjustButton>
                {/* <div className="quantity-field__plus js-quantity-up"><a href="#">+</a></div> */}
            </div>
            </div>
            {/* End item quantity */}

            <CartLineQuantityAdjustButton adjust="remove" style={{ 'height': '30px', 'backgroundColor': 'transparent', 'border': 'none', 'marginLeft': '10px' }}>
              <i className="lnil lnil-close" />
            </CartLineQuantityAdjustButton>
        </li>
        
  )
}
