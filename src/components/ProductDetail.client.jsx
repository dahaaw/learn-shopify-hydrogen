import { flattenConnection, ProductProvider } from '@shopify/hydrogen/client'
import React from 'react'
import ProductDetailMainImage from './ProductDetailMainImage.client'
import ProductDetailMobileGalery from './ProductDetailMobileGalery.client'
import ProductDetailRight from './ProductDetailRight.client'
import ProductDetailTabs from './ProductDetailTabs.client'
import ProductDetailThumbnails from './ProductDetailThumbnails.client'
import ProductSlider from './ProductSlider.client'

export default function ProductDetail({product}) {
  const initialVariant = flattenConnection(product.variants)[0];
  const media = flattenConnection(product.media);
  return (
      <ProductProvider data={product} initialVariantId={initialVariant.id}>
        <div class="product__previous-page">
        <a href="#"><i class="lnil lnil-arrow-left"></i></a>
        </div>
        
        <ProductDetailMobileGalery media={media}/>
        
        <div class="product">
          {/* <!-- Container --> */}
          <div class="container">
              {/* <!-- Product main --> */}
              <div class="product__main product__main--images-100-122 d-flex">
                  <ProductDetailMainImage media={media}/>
                  <ProductDetailThumbnails media={media}/>
                  <ProductDetailRight product={product}/>
              </div>
              {/* <!-- End product main --> */}

              <ProductDetailTabs />
          </div>
          {/* <!-- End container --> */}
        </div>

        <ProductSlider />
    </ProductProvider>
  )
}
