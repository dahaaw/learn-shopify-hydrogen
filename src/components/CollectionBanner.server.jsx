import React from 'react'
import gql from 'graphql-tag';
import { 
    flattenConnection,
    Link,
    useShop,
    useShopQuery
} from '@shopify/hydrogen';

export default function CollectionBanner() {
    const {languageCode} = useShop();
    const {data} = useShopQuery({
        query: QUERY,
        variables: {
            language: languageCode
        }
    })
    const products = flattenConnection(data.products);
    
  return (
    <div className="classic-collection-banners">
        {/* Container */}
        <div className="container">

            {products[0] && 
              <FirstBanner product={products[0]}/>
            }

            {products[1] && 
              <SecondBanner product={products[1]}/>
            }
            
        </div>
        {/* End container */}
        </div>
  )
}

const FirstBanner = ({product}) => {
  return(
    <div className="classic-collection-banner">
    {/* Banner image */}
    <div className="classic-collection-banner__image bg-white border">
        <img style={{ 'objectFit': 'contain' }} alt="Image" src={product.featuredImage.url} className />
    </div>
    {/* End banner image */}
    {/* Content */}
    <div className="classic-collection-banner__content">
        {/* Tag */}
        <div className="classic-collection-banner__tag">{product.title}</div>
        {/* End tag */}
        {/* Title */}
        <h4 className="classic-collection-banner__title">{product.vendor}</h4>
        {/* End title */}
        {/* Description */}
        <div className="classic-collection-banner__description">
          {product.description}
        </div>
        {/* End description */}
        {/* Action */}
        <div className="classic-collection-banner__action">
        <Link to={`/shop/${product.handle}`}>Shop Now</Link>
        </div>
        {/* End action */}
    </div>
    {/* End content */}
    </div>
  )
}

const SecondBanner = ({product}) => {
  return(
    <div className="classic-collection-banner classic-collection-banner--type-2">
      {/* Content */}
      <div className="classic-collection-banner__content">
          {/* Tag */}
          <div className="classic-collection-banner__tag">{product.title}</div>
          {/* End tag */}
          {/* Title */}
          <h4 className="classic-collection-banner__title">{product.vendor}</h4>
          {/* End title */}
          {/* Description */}
          <div className="classic-collection-banner__description">
            {product.description}
          </div>
          {/* End description */}
          {/* Action */}
          <div className="classic-collection-banner__action">
          <Link to={`/shop/${product.handle}`}>Shop Now</Link>
          </div>
          {/* End action */}
      </div>
      {/* End content */}
      {/* Banner image */}
      <div className="classic-collection-banner__image border bg-white">
          <img style={{ 'objectFit': 'contain' }} alt="Image" src={`${product.featuredImage.url}}`} className />
      </div>
      {/* End banner image */}
    </div>
  )
}

const QUERY = gql`
  query indexContent( $language: LanguageCode)
  @inContext(language: $language) {
    products(
        first: 10, 
        query: "T-SHIRTS"
    ) {  
      edges {
        node {
          handle
          id
          title
          vendor
          description
          featuredImage {
            url
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