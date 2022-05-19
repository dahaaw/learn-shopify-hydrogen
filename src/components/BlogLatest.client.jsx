import React from 'react'

export default function BlogLatest() {
  return (
    <div className="classic-our-journal">
        {/* Container */}
        <div className="container">
            {/* Line 1px */}
            <hr />
            {/* End line 1px */}
            {/* Title */}
            <h4 className="our-journal__title">Latest From Our Press</h4>
            {/* End title */}
            {/* Row */}
            <div className="row">
            {/* Post */}
            <div className="col-lg-6 col-xl-4">
                <div className="blog-article">
                {/* Image */}
                <div className="blog-article__image">
                    <a href="post.html">
                    <img alt="Image" data-sizes="auto" data-srcset="/assets/images/collection/post-1.jpg 1560w,
                            /assets/images/collection/post-1.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </a>
                </div>
                {/* End image */}
                {/* Meta */}
                <ul className="blog-article__meta">
                    <li><a href="#">Inspiration</a></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                </ul>
                {/* End meta */}
                {/* Title */}
                <h5 className="blog-article__title">
                    <a href="post.html">How to choose a sneakers suit for any your style</a>
                </h5>
                {/* End Title */}
                </div>
            </div> 
            {/* End post */}
            {/* Post */}
            <div className="col-lg-6 col-xl-4">
                <div className="blog-article">
                {/* Image */}
                <div className="blog-article__image">
                    <a href="post.html">
                    <img alt="Image" data-sizes="auto" data-srcset="/assets/images/collection/post-2.jpg 1560w,
                            /assets/images/collection/post-2.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </a>
                </div>
                {/* End image */}
                {/* Meta */}
                <ul className="blog-article__meta">
                    <li><a href="#">Tips &amp; Tricks</a></li>
                    <li>Dec 24, 2022</li>
                    <li>By Firmino</li>
                </ul>
                {/* End meta */}
                {/* Title */}
                <h5 className="blog-article__title">
                    <a href="post.html">How to mixed minimalist fashion style with basic items</a>
                </h5>
                {/* End Title */}
                </div>
            </div> 
            {/* End post */}
            {/* Post */}
            <div className="col-lg-6 col-xl-4 d-lg-none d-xl-block">
                <div className="blog-article">
                {/* Image */}
                <div className="blog-article__image">
                    <a href="post.html">
                    <img alt="Image" data-sizes="auto" data-srcset="/assets/images/collection/post-3.jpg 1560w,
                            /assets/images/collection/post-3.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </a>
                </div>
                {/* End image */}
                {/* Meta */}
                <ul className="blog-article__meta">
                    <li><a href="#">Lookbook</a></li>
                    <li>Dec 24, 2022</li>
                    <li>By Logan Cee</li>
                </ul>
                {/* End meta */}
                {/* Title */}
                <h5 className="blog-article__title">
                    <a href="post.html">Hello summer, discover the new sunglasses in lookbook</a>
                </h5>
                {/* End Title */}
                </div>
            </div> 
            {/* End post */}
            </div>
            {/* End row */}
        </div>
        {/* End container */}
        </div>
  )
}
