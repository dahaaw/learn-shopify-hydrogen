import React from 'react'

export default function Banner() {
  return (
    <div className="classic-banners">
        {/* Container */}
        <div className="container">
            {/* Row */}
            <div className="row">
            <div className="col-md-6">
                {/* Banner */}
                <div className="classic-banners__banner">
                {/* Banner image */}
                <div className="classic-banner__image">
                    <img alt="Image" data-sizes="auto" data-srcset="/assets/images/classic/banner-01.jpg 400w,
                        /assets/images/classic/banner-01.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                {/* End banner image */}
                {/* Banner content */}
                <div className="classic-banner__content">
                    <div className="classic-banner__tag">new in</div>
                    <h4 className="classic-banner__title">Khaki Trainer Sneakers</h4>
                </div> 
                {/* End banner content */}
                {/* Banner action */}
                <div className="classic-banner__action">
                    <a href="shop.html">Shop Now</a>
                </div>
                {/* End banner action */}
                </div>
                {/* End banner */}
            </div>
            <div className="col-md-6">
                {/* Banner */}
                <div className="classic-banners__banner classic-banners__banner--white">
                {/* Banner image */}
                <div className="classic-banner__image">
                    <img alt="Image" data-sizes="auto" data-srcset="/assets/images/classic/banner-02.jpg 400w,
                        /assets/images/classic/banner-02.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                {/* End banner image */}
                {/* Banner content */}
                <div className="classic-banner__content">
                    <div className="classic-banner__tag">best seller</div>
                    <h4 className="classic-banner__title">Basic Color T-Shirts</h4>
                </div> 
                {/* End banner content */}
                {/* Banner action */}
                <div className="classic-banner__action">
                    <a href="shop.html">Shop Now</a>
                </div>
                {/* End banner action */}
                </div>
                {/* End banner */}
            </div>
            </div>
            {/* End row */}
        </div>
        {/* End container */}
        </div>
  )
}
