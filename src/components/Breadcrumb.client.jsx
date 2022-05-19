import {Link} from '@shopify/hydrogen/client'
import React from 'react'

export default function Breadcrumb({ url = [] }) {
    const arrUrl = url.split('/');
    let title = '';
    const arrUrlFix = arrUrl.map((v, i) => {
        if(v && !v.includes(':') && !v.includes('.')) {
            return v
        }
    })
    return (
        <div class="shop-breadcrumb shop-breadcrumb--type-2">
        <div class="container">
            
            <ol class="breadcrumb text-uppercase">
                <li class="breadcrumb__item"><Link to="/">home </Link></li>
                {arrUrlFix.map((v, i) => {
                    const last = arrUrlFix.length - 1 === i;
                    if(last) title = v?.replace(/-/g, ' ')?.toUpperCase();
                    if(v && !v.includes(':') && !v.includes('.')) {
                        return (
                            <li class={`breadcrumb__item ${last && 'active'}`}>
                                {(last) ? title : <Link to={`/${v}`}>{v}</Link>}
                            </li>
                        )
                    }
                })}
            
            </ol>
            
            <h1 class="shop-breadcrumb__title">{title}</h1>
            {/* <!-- End Title --> */}
        </div>
    </div>
  )
}
