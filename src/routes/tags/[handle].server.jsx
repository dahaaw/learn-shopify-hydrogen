import { 
    CacheHours, 
    useShopQuery,
    flattenConnection
  } from '@shopify/hydrogen';
  import gql from 'graphql-tag';
import { Suspense } from 'react';
  
  import Breadcrumb from '../../components/Breadcrumb.client';
  import Layout from '../../components/Layout.server';
  import LoadMore from '../../components/LoadMore.client';
  import ProductLists from '../../components/ProductLists.client';
  
  export default function Shop({params, request, first = 8}) {
    const {handle} = params;
    const {data} = useShopQuery({
      query: QUERY,
      cache: CacheHours(),
      preload: "*",
      variables: {
        first,
        handle
      }
    });
    const products = flattenConnection(data.products);

    return (
      <Layout>
        <LoadMore current={first} hasNextPage={data.products.pageInfo.hasNextPage}>
          <Breadcrumb url={request.normalizedUrl}/>
          <Suspense fallback={null}>
            <ProductLists products={products}/>
          </Suspense>
        </LoadMore>
      </Layout>
    );
  }
  
  const QUERY = gql`
    query layoutContent(
      $language: LanguageCode, 
      $first: Int!,
      $handle: String!
    )
    @inContext(language: $language) {
    products(
      first: $first
      query: $handle
    ) {
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