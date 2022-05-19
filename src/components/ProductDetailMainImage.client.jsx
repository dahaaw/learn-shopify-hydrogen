import React from 'react'

export default function ProductDetailMainImage({media}) {
  return (
    <ul class="product__main-image js-popup-gallery">
        {media.map((v, i) => {
            if(v.mediaContentType === 'IMAGE') return(
                <li class={`${i === 0 && 'active'} js-product-main-image`} data-id={i} key={i}>
                    <a href={v.image.url}>
                        <img
                        alt="Image"
                        style={{ 'objectFit': 'contain' }}
                        src={v.image.url} data-zoomed={v.image.url} class="js-zoomit" />
                    </a>
                </li>
            )
        })}
    </ul>
  )
}
