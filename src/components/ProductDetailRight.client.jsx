import { flattenConnection } from '@shopify/hydrogen'
import React from 'react'

export default function ProductDetailRight({product}) {
  const variants = flattenConnection(product.variants);
  const selectedVariant = variants[0];
  console.log(selectedVariant)
  return (
    <div class="product__right">
      {/* <h1 class="product__title">{product.title}</h1> */}
      
      {/* <!-- Product reviews --> */}
      <div class="product__reviews d-none">
        <i class="lnir lnir-star-filled active"></i>
        <i class="lnir lnir-star-filled active"></i>
        <i class="lnir lnir-star-filled active"></i>
        <i class="lnir lnir-star-filled active"></i>
        <i class="lnir lnir-star-filled"></i>
        <span>3 reviews</span>
      </div>
      {/* <!-- End product reviews --> */}
      {/* <!-- Product price --> */}
      <div class="product__price">
        {selectedVariant.priceV2.amount} {selectedVariant.priceV2.currencyCode}
        {/* <span class="product-price__new">$19.59</span> */}
        {selectedVariant.compareAtPriceV2 && <span class="product-price__old">{selectedVariant.compareAtPriceV2.amount} {selectedVariant.compareAtPriceV2.currencyCode}</span>}
      </div>
      {/* <!-- End product price --> */}
      {/* <!-- Status --> */}
      <div class="product__status">
        <i class="lnir lnir-package"></i>
        <span>Status:</span>
        <span class="status__value status__value--in-stock">{!selectedVariant.availableForSale ? 'In stock' : <span className='text-danger'>Sold Out</span>}</span>
      </div>
      {/* <!-- End product status --> */}
      {/* <!-- Product description --> */}
      <div class="product__description">
        {product.descriptionHtml}
      </div>
      {/* <!-- End product description --> */}
      {/* <!-- Options --> */}
      <div class="product__options">
      {/* <!-- Product colors --> */}
      <div class="product__colors d-flex align-items-center">
          {/* <!-- Available colors --> */}
          <ul class="product__available-colors">
          <li class="active"><a href="#" style={{ "background": "#503a2a" }} class="open-tooltip"><span class="custom-tooltip">Bold Brown</span></a></li>
          <li><a href="#" style={{ "background": "#1c1b20" }} class="open-tooltip"><span class="custom-tooltip">Black</span></a></li>
          </ul>
          {/* <!-- End available colors --> */}
          {/* <!-- Current color --> */}
          <div class="product__current-color">Color: <span>Bold Brown</span></div>
          {/* <!-- End current color --> */}
      </div>
      {/* <!-- End product colors --> */}
      {/* <!-- Product sizes --> */}

      {/* {variants.map(v => {
          
      })} */}
      <div class="product__sizes-2 d-flex align-items-center">
          {/* <!-- Available sizes --> */}
          <ul class="product__available-sizes">
          <li><a href="#">39</a></li>
          <li class="active"><a href="#">40</a></li>
          <li><a href="#">41</a></li>
          </ul>
          {/* <!-- End available sizes --> */}
          {/* <!-- Current size --> */}
          <div class="product__current-size">Size: <span>40</span></div>
          {/* <!-- End current size --> */}
      </div>
      {/* <!-- End product sizes --> */}
      </div>
      {/* <!-- End options --> */}
      {/* <!-- Product action -->  */}
      <div class="product__action js-product-action">
      {/* <!-- Product quantity and add to cart --> */}
      <div class="product__quantity-and-add-to-cart d-flex">
          {/* <!-- Quantity --> */}
          <div class="product__quantity">
          <div class="product-quantity__minus js-quantity-down"><a href="#"><i class="lnil lnil-minus"></i></a></div>
          <input type="text" value="2" class="product-quantity__input js-quantity-field" />
          <div class="product-quantity__plus js-quantity-up"><a href="#"><i class="lnil lnil-plus"></i></a></div>
          </div>  
          {/* <!-- End quantity --> */}
          {/* <!-- Add to cart --> */}
          <div class="product__add-to-cart">
          <a href="#" class="eighth-button">Add to cart</a>
          </div>
          {/* <!-- End add to cart --> */}
      </div>
      {/* <!-- End product quantity and add to cart --> */}
      {/* <!-- Buy now --> */}
      <div class="product__buy-now">
          <a href="#" class="second-button">Buy now</a>
      </div>
      {/* <!-- End buy now --> */}
      </div>
      {/* <!-- End product action --> */}
      {/* <!-- Product second action --> */}
      <ul class="product__second-action d-flex">
      <li><a href="#"><i class="lnil lnil-heart"></i> Add to wishlist</a></li>
      <li><a href="#"><i class="lnil lnil-reload"></i> Compare</a></li>
      </ul>
      {/* <!-- End product section action --> */}
      {/* <!-- Product information --> */}
      <ul class="product__information">
      <li><span>SKU</span><p>SS-501</p></li>
      <li><span>Category</span><p>Men’s Clothing</p></li>
      <li><span>Tags</span><p><a href="#">shirt</a>, <a href="#">men</a>, <a href="#">basic</a>, <a href="#">cotton</a></p></li>
      <li><span>Brand</span><p><a href="#">Zara</a></p></li>
      </ul>
      {/* <!-- End product information --> */}
      {/* <!-- Product social --> */}
      <ul class="product__socials product__socials--type-2">
      <li><a href="https://twitter.com" target="_blank"><i class="lnil lnil-twitter"></i></a></li>
      <li><a href="https://facebook.com" target="_blank"><i class="lnil lnil-facebook"></i></a></li>
      <li><a href="https://instagram.com" target="_blank"><i class="lnil lnil-Instagram"></i></a></li>
      </ul>
      {/* <!-- End product social --> */}
  </div>
  )
}
