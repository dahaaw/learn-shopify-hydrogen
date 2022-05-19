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

const Layout = ({children}) => {
    // GETTING DATA FOR HEADER
    const {data} = useShopQuery({
        query: QUERY,
        cache: CacheHours(),
        preload: "*"
    });
    // console.log(JSON.stringify(data))
    
    return (
        <div class="home-classic">
            <div id="main">
                <Header shop={data.shop}/>
                <CanvasCart />
                {children}
                <Footer />
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
    }
  }
`;
