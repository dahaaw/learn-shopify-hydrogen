import React from 'react'

export default function ProductDetailMobileGalery({media}) {
  return (
    <div class="product__mobile-gallery product__mobile-gallery--images-100-122 js-product-mobile-gallery">
        {media.map((v, i) => {
            if(v.mediaContentType === 'IMAGE') return(
                <div class="mobile-product-image">
                    <p>
                        <a href={v.image.url}>
                            <img
                            alt="Image"
                            style={{ 'objectFit': 'contain' }}
                            src={v.image.url} />
                        </a>
                    </p>
                </div>
            )
        })}
    </div>
  )
}
