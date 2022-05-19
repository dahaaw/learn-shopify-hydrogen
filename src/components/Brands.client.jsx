import React from 'react'

export default function Brands() {
  return (
    <div className="classic-brands">
        {/* Container */}
        <div className="container">
            {/* Home brands items */}
            <div className="home-brands__items">
            {/* Item */}
            <div className="home-brand-item">
                <a href="#">
                <img alt="Image" src="/src/assets/images/default/brand_1.png" className="lazyload" />
                </a>
            </div>
            {/* End item */}
            {/* Item */}
            <div className="home-brand-item">
                <a href="#">
                <img alt="Image" src="/src/assets/images/default/brand_2.png" className="lazyload" />
                </a>
            </div>
            {/* End item */}
            {/* Item */}
            <div className="home-brand-item">
                <a href="#">
                <img alt="Image" src="/src/assets/images/default/brand_3.png" className="lazyload" />
                </a>
            </div>
            {/* End item */}
            {/* Item */}
            <div className="home-brand-item">
                <a href="#">
                <img alt="Image" src="/src/assets/images/default/brand_4.png" className="lazyload" />
                </a>
            </div>
            {/* End item */}
            {/* Item */}
            <div className="home-brand-item">
                <a href="#">
                <img alt="Image" src="/src/assets/images/default/brand_5.png" className="lazyload" />
                </a>
            </div>
            {/* End item */}
            </div>
            {/* End home brands items */}
            {/* Line 1px */}
            <hr />
            {/* End line 1px */}
        </div>
        {/* End container */}
    </div>
  )
}
