import React from 'react'

export default function ProductDetailThumbnails({media}) {
  return (
    <ul class="product__thumbnails">
        {media.map((v, i) => {
            if(v.mediaContentType === 'IMAGE') return(
                <li key={i}>
                    <a href="#" class={`${i === 0 && 'active'} js-product-thumbnail`} data-id={i}>
                        <img
                        alt="Image"
                        style={{ 'objectFit': 'contain' }}
                        src={v.image.url} />
                    </a>
                </li>
            )
        })}
    </ul>
  )
}
