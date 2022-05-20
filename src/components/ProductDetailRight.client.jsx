import { flattenConnection, useProduct } from '@shopify/hydrogen/client'
import React from 'react'
import ProductDetailReviews from './ProductDetailReviews.client';

export default function ProductDetailRight() {
  const { 
    descriptionHtml, 
    vendor, 
    selectedVariant, 
    title, 
    options, 
    setSelectedOption, 
    selectedOptions, 
    variants,
    collections
  } = useProduct();
  console.log(useProduct())
  return (
    <div class="product__right">
      {/* <h1 class="product__title">{title}</h1> */}
      
      <ProductDetailReviews />
      
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
        <span class="status__value status__value--in-stock">{selectedVariant.availableForSale ? 'In stock' : <span className='text-danger'>Sold Out</span>}</span>
      </div>
      {/* <!-- End product status --> */}

      {/* <!-- Product description --> */}
      <div class="product__description">
        {descriptionHtml}
      </div>
      {/* <!-- End product description --> */}
      {/* <!-- Options --> */}
      <div class="product__options">
      {options.map(({name, values}) => {
        if(name === 'Color'){
          return(
            <div class="product__colors d-flex align-items-center">
                
                <ul class="product__available-colors">
                  {values.map((v,i) => {
                    return(
                      <li 
                        onClick={() => setSelectedOption(name, v)}
                        key={i} 
                        role="button"
                        class={`cursor-pointer ${v === selectedOptions[name] && "active"}`}
                      >
                          <a style={{ "background": v }} class="open-tooltip">
                            <span class="custom-tooltip">{v}</span>
                          </a>
                      </li>    
                    )
                  })}
                </ul>
                
                {/* <!-- Current color --> */}
                <div class="product__current-color">{name}: <span>{selectedOptions[name]}</span></div>
                {/* <!-- End current color --> */}
            </div>
          )
        }else{
          return(
            <div class="product__sizes-2 d-flex align-items-center">
              
              <ul class="product__available-sizes">
                {values.map((v,i)=> {
                  return(
                    <li 
                      onClick={() => setSelectedOption(name, v)}
                      key={i} 
                      className={v === selectedOptions[name] && 'active'}
                      role="button"
                    >
                      <a>{v}</a>
                    </li>
                  )
                })}
              </ul>
              
              {/* <!-- Current variant --> */}
              <div class="product__current-size">{name}: <span>{selectedOptions[name]}</span></div>
              {/* <!-- End current variant --> */}
            </div>
          )
        }

      })}
      
      </div>
      {/* <!-- End options --> */}
      {/* <!-- Product action -->  */}
      <div class="product__action js-product-action">
      {/* <!-- Product quantity and add to cart --> */}
      <div class={`product__quantity-and-add-to-cart ${selectedVariant.availableForSale ? 'd-flex' : 'd-none'}`}>
          {/* <!-- Quantity --> */}
          <div class="product__quantity">
            <div class="product-quantity__minus js-quantity-down"><a href="#"><i class="lnil lnil-minus"></i></a></div>
            <input type="text" value="1" class="product-quantity__input js-quantity-field" />
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
      <div class={`product__buy-now ${!selectedVariant.availableForSale && 'd-none'}`}>
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
      <li><span>SKU</span><p>{selectedVariant.sku}</p></li>
      <li><span>Category</span><p>{collections ? collections : '-'}</p></li>
      <li><span>Tags</span><p>
        <a href="#">shirt</a>, 
        <a href="#">men</a>, 
        <a href="#">basic</a>, <a href="#">cotton</a>
      </p></li>
      <li><span>Brand</span><p><a href="#">{vendor}</a></p></li>
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
