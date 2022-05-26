import { flattenConnection } from '@shopify/hydrogen'
import {Link} from '@shopify/hydrogen/client';
import React from 'react'

export default function ProductSlider({products = []}) {
  return (
    <div className="our-products classic-limited-edition">
      {/* Container */}
      <div className="container">
          {/* Title */}
          <h4 className="our-products__title">Recommendation</h4>
          {/* End title */}
          {/* Slick products */}
          <div className="our_products__products js-home-classic-our-products-2">
          {/* Product */}
            {products.map((product,i) => {
                const images = flattenConnection(product.images);
                return(
                    
                    <div className="product-grid-item product-grid-item--type-2 product-grid-item--type-4">
                        {/* Wishlist */}
                        <div className="product-grid-item__wishlist-top-right"><a href="#"><i className="lnil lnil-heart" /></a></div>
                        {/* End wishlist */}
                        {/* Product images */}
                        <div className="product-grid-item__images product-grid-item__images--ratio-100-122 js-product-grid-images" data-current-image={i}>
                        {/* Product images arrows */}
                        <div className="product-grid-item__images-arrows">
                            {/* Previous */}
                            <div className="product-grid-item__previous-image js-product-grid-previous-image"><i className="lnil lnil-chevron-left" /></div>
                            {/* End previous */}
                            {/* Previous */}
                            <div className="product-grid-item__next-image js-product-grid-next-image"><i className="lnil lnil-chevron-right" /></div>
                            {/* End previous */}
                        </div>
                        {/* End product images arrows */}

                        {/* Product image */}
                        {images.map((v,i) => {
                            return(
                                <Link to={`/shop/${product.handle}`}>
                                    <div className={`product-grid-item__image js-product-grid-image ${i === 0 && 'active'}`}>
                                        <a href="#" className="border ">
                                        <img alt="Image" style={{ 'objectFit': 'contain' }} data-sizes="auto" data-srcset={`${v.url} 400w,
                                                ${v.url} 800w`} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                                        </a>
                                    </div>
                                </Link>
                            )
                        })}
                        {/* End product image */}
                        
                        </div>
                        {/* End product images */}

                        {/* Product feature */}
                        <div className="product-grid-item__feature">{product.vendor}</div>
                        {/* End product feature */}
                        {/* Product name */}
                        <div className="product-grid-item__name">
                        <a href="product.html">{product.title}</a>
                        </div>
                        {/* End product name */}
                        {/* Product price */}
                        <div className="product-grid-item__price">
                        {/* Price new */}
                        <span className="product-grid-item__price-new">
                            {product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}
                        </span>
                        {/* End price new */}
                        {/* Price old */}
                        {product.compareAtPriceRange.minVariantPrice.amount !== '0.0' &&
                            <span className="product-grid-item__price-old">$68.5</span>
                        }
                        {/* End price old */}
                        </div>
                        {/* End product price */}
                    </div>
                    
                )
            })}
          {/* End Product */}
          
          </div>
          {/* End slick products */}
      </div>
      {/* End container */}
      </div>
  )
}
