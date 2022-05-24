import { useServerProps } from "@shopify/hydrogen/client";

import React from 'react'

export default function LoadMore({children, current, hasNextPage}) {
    const {setServerProps} = useServerProps();
    return (
        <div class="collection">
            {/* <!-- Container --> */}
            <div class="container">
                {children}

                {hasNextPage && 
                    <div
                    class="loading-spin text-center"
                    onClick={() => setServerProps('first', current + 8)}
                    >
                        <span class="seventh-button">Load more</span>
                    </div>
                }
            </div>
        </div>
    )
}
