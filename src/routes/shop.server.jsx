import { 
  CacheHours, 
  useShopQuery,
  flattenConnection
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Breadcrumb from '../components/Breadcrumb.client';
import Layout from '../components/Layout.server';
import ProductLists from '../components/ProductLists.client';

export default function Shop({request}) {
  const {data} = useShopQuery({
    query: QUERY,
    cache: CacheHours(),
    preload: "*"
  });
  const products = flattenConnection(data.products);

  return (
    <Layout>
      <Breadcrumb url={request.normalizedUrl}/>
      <ProductLists products={products}/>
    </Layout>
  );
}

const QUERY = gql`
  query layoutContent($language: LanguageCode)
  @inContext(language: $language) {
    products(first: 8) {
      edges {
        node {
            title
            vendor
            handle
            descriptionHtml,
            images(first: 8) {
              edges {
                node {
                  url
                }
              }
            },
            compareAtPriceRange {
              maxVariantPrice {
                currencyCode
                amount
              }
              minVariantPrice {
                currencyCode
                amount
              }
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