import Banner from '../components/Banner.server';
import BlogLatest from '../components/BlogLatest.client';
import Brands from '../components/Brands.server';
import CollectionBanner from '../components/CollectionBanner.server';
import Intro from '../components/Intro.client';
import Layout from '../components/Layout.server';
import Newslater from '../components/Newslater.client';
import ProductFeatured from '../components/ProductFeatured.server';
import ProductSlider from '../components/ProductSlider.client';

import gql from 'graphql-tag';
import { 
    flattenConnection,
    Link,
    useShop,
    useShopQuery
} from '@shopify/hydrogen';

export default function Home() {

  const {languageCode} = useShop();
  const {data} = useShopQuery({
      query: QUERY,
      variables: {
          language: languageCode
      }
  })
    
  return (
    <Layout>
      <Banner />
      <Intro />
      <Brands />
      <ProductFeatured />
      <CollectionBanner />
      <ProductSlider products={data.productRecommendations}/>
      <BlogLatest />
      <Newslater />
    </Layout>
  );
}

const QUERY = gql`
  query indexContent( $language: LanguageCode)
  @inContext(language: $language) {
    productRecommendations(productId: "gid://shopify/Product/6848505905252") {
      handle
      id
      title
      vendor
      description
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
`;