import React from 'react';

import gql from 'graphql-tag';
import { 
    flattenConnection,
    Link,
    useShop,
    useShopQuery
} from '@shopify/hydrogen';

const ProductFeatured = () => {
    const {languageCode} = useShop();
    const {data} = useShopQuery({
        query: QUERY,
        variables: {
            language: languageCode
        }
    })

    const products = flattenConnection(data.products);
    return (
        <div className="our-products classic-our-products">
            {/* Container */}
            <div className="container">
                {/* Title */}
                <h4 className="our-products__title">ACCESSORIES</h4>
                {/* End title */}
                {/* Nav */}
                {/* <ul className="our-products__nav">
                <li><a href="shop.html" className="active">New arrivals</a></li>
                <li><a href="shop.html">Best seller</a></li>
                <li><a href="shop.html">Restock items</a></li>
                </ul> */}
                {/* End nav */}

                {/* Slick products */}
                <div className="our_products__products js-home-classic-our-products">
                
                {products.map((pdk,i) => {
                    const images = flattenConnection(pdk.images);
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
                                {images.map((v, i) => {
                                    return(
                                        <div className={`product-grid-item__image js-product-grid-image border overflow-hidden ${i === 0 && 'active'}`}>
                                            <Link to={`/shop/${pdk.handle}`}>
                                                <img alt="Image" style={{ 'objectFit' : 'contain'}} data-sizes="auto" data-srcset={`${v.url} 400w,
                                                    ${v.url} 800w`} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                                            </Link>
                                        </div>
                                    );
                                })}
                                {/* End product image */}

                            
                            </div>
                            {/* End product images */}
                            {/* Product action */}
                            <div className="product-grid-item__classic-action">
                            
                            </div>
                            {/* End product action */}
                            {/* Product feature */}
                            <div className="product-grid-item__feature">{pdk.vendor}</div>
                            {/* End product feature */}
                            {/* Product name */}
                            <div className="product-grid-item__name">
                            <a href="product.html">{pdk.title}</a>
                            </div>
                            {/* End product name */}
                            {/* Product price */}
                            <div className="product-grid-item__price">
                            {/* Price new */}
                            <span className="product-grid-item__price-new">{pdk.priceRange.minVariantPrice.amount} {pdk.priceRange.minVariantPrice.currencyCode}</span>
                            {/* End price new */}
                            {/* Price old */}
                            {pdk.compareAtPriceRange.minVariantPrice.amount !== '0.0' &&
                                <span className="product-grid-item__price-old">{pdk.compareAtPriceRange.minVariantPrice.amount} {pdk.compareAtPriceRange.minVariantPrice.currencyCode}</span>
                            }
                            {/* End price old */}
                            </div>
                            {/* End product price */}
                        </div>
                    )
                })}
                {/* Product */}
                {/* End Product */}
                
                </div>
                {/* End slick products */}
            </div>
            {/* End container */}
        </div>
    );
}

export default ProductFeatured;

const QUERY = gql`
  query indexContent( $language: LanguageCode)
  @inContext(language: $language) {
    products(
        first: 25, 
        query: "ACCESSORIES"
    ) {  
      edges {
        node {
          handle
          id
          title
          vendor
          images(first:8) {
              edges {
                  node {
                      url
                  }
              }
          }
        compareAtPriceRange{
          minVariantPrice{
            amount
            currencyCode
          }
        }
        priceRange{
          minVariantPrice{
            amount
            currencyCode
          }
        }
        }
      }
    }
  }   
`;