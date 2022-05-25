import React from 'react'
import { 
    useShopQuery,
    useShop,
    flattenConnection,
    Link
} from '@shopify/hydrogen';

import gql from 'graphql-tag';

export default function Banner() {
    const {languageCode} = useShop();
    const {data} = useShopQuery({
        query: QUERY,
        variables: {
            language: languageCode
        }
    });

  const products = flattenConnection(data.products);

  return (
    <div className="classic-banners">
        {/* Container */}
        <div className="container">
            {/* Row */}
            <div className="row">
            {products.map(v => {
              return(
                <div className="col-md-6">
                    {/* Banner */}
                    <div className="classic-banners__banner">
                    {/* Banner image */}
                    <div className="classic-banner__image border overflow-hidden">
                        <img style={{ 'objectFit': 'contain' }} alt="Image" data-sizes="auto" data-srcset={`${v.featuredImage.url} 400w,
                            ${v.featuredImage.url} 800w`} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </div>
                    {/* End banner image */}
                    {/* Banner content */}
                    <div className="classic-banner__content">
                        <div className="classic-banner__tag">new in</div>
                        <h4 className="classic-banner__title">{v.vendor}</h4>
                    </div> 
                    {/* End banner content */}
                    {/* Banner action */}
                    <div className="classic-banner__action">
                        <Link to={`/shop/${v.handle}`}>Shop Now</Link>
                    </div>
                    {/* End banner action */}
                    </div>
                    {/* End banner */}
                </div>

              )
            })}

            </div>
            {/* End row */}
        </div>
        {/* End container */}
        </div>
  )
}

const QUERY = gql`
  query indexContent( $language: LanguageCode)
  @inContext(language: $language) {
    products(first: 2) {
      edges {
        node {
          handle
          id
          title
          vendor
          featuredImage {
            url
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                availableForSale
                image {
                  id
                  url
                  altText
                  width
                  height
                }
                priceV2 {
                  currencyCode
                  amount
                }
                compareAtPriceV2 {
                  currencyCode
                  amount
                }
              }
            }
          }
        }
      }
    }
  }   
`;