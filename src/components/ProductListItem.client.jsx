import { flattenConnection } from '@shopify/hydrogen';
import { Link } from '@shopify/hydrogen/client';
import React from 'react'

export default function ProductListItem({product}) {
    // console.log(product);
    const images = flattenConnection(product.images);
    const variants = flattenConnection(product.variants);
    const selectedVariant = variants[0];

  return (
    <div class="col-6 col-md-4 col-xl-3">
        {/* <!-- Product --> */}
        <div class="product-grid-item product-grid-item--type-2 product-grid-item--type-5">
        {/* <!-- Product tag --> */}
        {/* <div class="product-grid-item__tag">huhu</div> */}
        {/* <!-- End product tag --> */}
        {/* <!-- Product images --> */}
        <div class="product-grid-item__images product-grid-item__images--ratio-100-122 js-product-grid-images" data-current-image="0">
            {/* <!-- Product images arrows --> */}
            <div class="product-grid-item__images-arrows">
            {/* <!-- Previous --> */}
            <div class="product-grid-item__previous-image js-product-grid-previous-image"><i class="lnil lnil-chevron-left"></i></div>
            {/* <!-- End previous --> */}
            {/* <!-- Previous --> */}
            <div class="product-grid-item__next-image js-product-grid-next-image"><i class="lnil lnil-chevron-right"></i></div>
            {/* <!-- End previous --> */}
            </div>
            {/* <!-- End product images arrows --> */}
            
            {/* <!-- Product image --> */}
            {images.map((v, i) => {
                return (
                    <div class={`product-grid-item__image js-product-grid-image ${i === 0 && 'active'}`}>
                        <Link to={`/shop/${product.handle}`}>
                            <img
                            alt="Image"
                            data-sizes="auto"
                            data-srcset={`${v.url} 400w,
                            ${v.url} 800w`}
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            className="lazyload object-cover" 
                            style={{ 'objectFit': 'contain' }}/>
                        </Link>
                        
                    </div>
                )
            })}
            {/* <!-- End product image --> */}


            {/* <!-- Quick shop --> */}
            <div class="product-grid-item__quick-shop">
            <a href={`/collections/${product.vendor.replace(/ /g, '-').toLowerCase()}`}>{product.vendor}</a>
            </div>
            {/* <!-- End quick shop --> */}
        </div>
        {/* <!-- End product images --> */}
        {/* <!-- Product name --> */}
        <div class="product-grid-item__name">
            <Link to={`/shop/${product.handle}`}>{product.title}</Link>
        </div>
        {/* <!-- End product name --> */}
        {/* <!-- Product price --> */}
        <div class="product-grid-item__price">
            {/* <!-- Price new --> */}
            <span class="product-grid-item__price-new">{selectedVariant.priceV2.amount} {selectedVariant.priceV2.currencyCode}</span>
            {/* <!-- End price new --> */}
            {/* <!-- Price old --> */}
            {selectedVariant.compareAtPriceV2 && <span class="product-grid-item__price-old">{selectedVariant.compareAtPriceV2.amount} {selectedVariant.compareAtPriceV2.currencyCode}</span>}
            {/* <!-- End price old --> */}
        </div>
        {/* <!-- End product price --> */}
        </div>
        {/* <!-- End Product --> */}
    </div>
  )
}
