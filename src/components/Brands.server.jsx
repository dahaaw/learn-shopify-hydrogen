import React from 'react'
import gql from 'graphql-tag';
import { flattenConnection, Link, useShop, useShopQuery } from '@shopify/hydrogen';

export default function Brands() {
    const {languageCode} = useShop();
    const {data} = useShopQuery({
        query: QUERY,
        language: languageCode
    })
    const collections = flattenConnection(data.collections)
    console.log(collections)
  return (
    <div className="classic-brands">
        {/* Container */}
        <div className="container">
            {/* Home brands items */}
            <div className="home-brands__items">
            
            {/* Item */}    
            {collections.map(v => {
                return(
                    <>
                        {v.image?.url &&
                        <div className="home-brand-item">
                            <Link to={`/collections/${v.handle}`}>
                            <img style={{ 'max-height': '100px'}} alt="Image" src={`${v.image?.url}`} className="lazyload" />
                            </Link>
                        </div>
                        }
                    </>
                )
            })}
            {/* End item */}
            

            </div>
            {/* End home brands items */}
            {/* Line 1px */}
            <hr />
            {/* End line 1px */}
        </div>
        {/* End container */}
    </div>
  )
}

const QUERY = gql`
  query indexContent( $language: LanguageCode)
  @inContext(language: $language) {
    collections(first: 7 ) {
        edges {
            node {
                id
                title
                handle
                image {
                    url
                }
            }
        }
    }
  }   
`;