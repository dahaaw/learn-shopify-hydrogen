import React from 'react'

export default function CollectionBanner() {
  return (
    <div className="classic-collection-banners">
        {/* Container */}
        <div className="container">
            {/* Banner */}
            <div className="classic-collection-banner">
            {/* Banner image */}
            <div className="classic-collection-banner__image">
                <img alt="Image" src="/assets/images/classic/banner-03.jpg" className />
            </div>
            {/* End banner image */}
            {/* Content */}
            <div className="classic-collection-banner__content">
                {/* Tag */}
                <div className="classic-collection-banner__tag">autumn tweed</div>
                {/* End tag */}
                {/* Title */}
                <h4 className="classic-collection-banner__title">Essentials For Ladies</h4>
                {/* End title */}
                {/* Description */}
                <div className="classic-collection-banner__description">
                We've discovered a better than ever cream foundation for light porcelain skins that achieves exactly that.
                </div>
                {/* End description */}
                {/* Action */}
                <div className="classic-collection-banner__action">
                <a href="shop.html">Shop Now</a>
                </div>
                {/* End action */}
            </div>
            {/* End content */}
            </div>
            {/* End banner */}
            {/* Banner */}
            <div className="classic-collection-banner classic-collection-banner--type-2">
            {/* Content */}
            <div className="classic-collection-banner__content">
                {/* Tag */}
                <div className="classic-collection-banner__tag">sustainable choice</div>
                {/* End tag */}
                {/* Title */}
                <h4 className="classic-collection-banner__title">Accordion Fold Bag</h4>
                {/* End title */}
                {/* Description */}
                <div className="classic-collection-banner__description">
                We've discovered a better than ever cream foundation for light
                </div>
                {/* End description */}
                {/* Action */}
                <div className="classic-collection-banner__action">
                <a href="shop.html">Shop Now</a>
                </div>
                {/* End action */}
            </div>
            {/* End content */}
            {/* Banner image */}
            <div className="classic-collection-banner__image">
                <img alt="Image" src="/assets/images/classic/banner-04.jpg" className />
            </div>
            {/* End banner image */}
            </div>
            {/* End banner */}
        </div>
        {/* End container */}
        </div>
  )
}
