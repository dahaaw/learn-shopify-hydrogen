import { 
  CacheHours, 
  useShopQuery,
  flattenConnection
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Breadcrumb from '../components/Breadcrumb.client';
import Layout from '../components/Layout.server';
import LoadMore from '../components/LoadMore.client';
import ProductLists from '../components/ProductLists.client';

export default function Shop({request, first = 8}) {
  const {data} = useShopQuery({
    query: QUERY,
    cache: CacheHours(),
    preload: "*",
    variables: {
      first
    }
  });
  const products = flattenConnection(data.products);

  return (
    <Layout>
      <LoadMore current={first} hasNextPage={data.products.pageInfo.hasNextPage}>
        <Breadcrumb url={request.normalizedUrl}/>
        <ProductLists products={products}/>
      </LoadMore>
    </Layout>
  );
}

const QUERY = gql`
  query layoutContent($language: LanguageCode, $first: Int!)
  @inContext(language: $language) {
    products(first: $first) {
      pageInfo {
        hasNextPage
      }
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