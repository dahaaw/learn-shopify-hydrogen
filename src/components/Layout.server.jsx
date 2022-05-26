import {
  useShop,
  CacheHours,
  useShopQuery,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import React from 'react';
import CanvasCart from './CanvasCart.client';
import Footer from './Footer.server';
import Header from './Header.client';
import JquertLoad from './JquertLoad.client';

const Layout = ({children}) => {
    // GETTING DATA FOR HEADER
    const {data} = useShopQuery({
        query: QUERY,
        cache: CacheHours(),
        preload: "*"
    });
    
    return (
        <div class="home-classic">
            <div id="main">
                <JquertLoad>
                  <Header data={data} shop={data.shop}/>
                  <CanvasCart />
                  {children}
                  <Footer />
                </JquertLoad>
            </div>
        </div>
    );
}

export default Layout;

const QUERY = gql`
  query layoutContent($language: LanguageCode)
  @inContext(language: $language) {
    shop {
      name,
      description
    },

    collections(first:10) {
      edges {
        node {
          title
          handle
        }
      }
    }
    
    productTags(first:10) {
      edges {
        node
      }
    }  
    
    productTypes(first:10) {
      edges {
        node
      }
    }
  }
`;
