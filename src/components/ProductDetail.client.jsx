import React from 'react'

export default function ProductDetail() {
  return (
        <>
        <div class="product__previous-page">
        <a href="#"><i class="lnil lnil-arrow-left"></i></a>
        </div>
        {/* <!-- End product mobile previous page --> */}
        {/* <!-- Product mobile gallery --> */}
        <div class="product__mobile-gallery product__mobile-gallery--images-100-122 js-product-mobile-gallery">
        <div class="mobile-product-image">
            <p>
            <a href="/src/assets/products/2/33a.jpg">
                <img
                alt="Image"
                src="/src/assets/products/2/33a.jpg" />
            </a>
            </p>
        </div>
        <div class="mobile-product-image">
            <p>
            <a href="/src/assets/products/2/33b.jpg">
                <img
                alt="Image"
                src="/src/assets/products/2/33b.jpg" />
            </a>
            </p>
        </div>
        <div class="mobile-product-image">
            <p>
            <a href="/src/assets/products/2/33c.jpg">
                <img
                alt="Image"
                src="/src/assets/products/2/33c.jpg" />
            </a>
            </p>
        </div>
        <div class="mobile-product-image">
            <p>
            <a href="/src/assets/products/2/33d.jpg">
                <img
                alt="Image"
                src="/src/assets/products/2/33d.jpg" />
            </a>
            </p>
        </div>
        <div class="mobile-product-image">
            <p>
            <a href="/src/assets/products/2/33e.jpg">
                <img
                alt="Image"
                src="/src/assets/products/2/33e.jpg" />
            </a>
            </p>
        </div>
        </div>
        {/* <!-- End product mobile allery --> */}
        {/* <!-- Product --> */}
        <div class="product">
        {/* <!-- Container --> */}
        <div class="container">
            {/* <!-- Product main --> */}
            <div class="product__main product__main--images-100-122 d-flex">
            {/* <!-- Product main image --> */}
            <ul class="product__main-image js-popup-gallery">
                <li class="active js-product-main-image" data-id="0">
                <a href="/src/assets/products/2/33a.jpg">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33a.jpg" data-zoomed="/src/assets/products/2/33a.jpg" class="js-zoomit" />
                </a>
                </li>
                <li class="js-product-main-image" data-id="1">
                <a href="/src/assets/products/2/33b.jpg">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33b.jpg" data-zoomed="/src/assets/products/2/33b.jpg" class="js-zoomit" />
                </a>
                </li>
                <li class="js-product-main-image" data-id="2">
                <a href="/src/assets/products/2/33c.jpg">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33c.jpg" data-zoomed="/src/assets/products/2/33c.jpg" class="js-zoomit" />
                </a>
                </li>
                <li class="js-product-main-image" data-id="3">
                <a href="/src/assets/products/2/33d.jpg">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33d.jpg" data-zoomed="/src/assets/products/2/33d.jpg" class="js-zoomit" />
                </a>
                </li>
                <li class="js-product-main-image" data-id="4">
                <a href="/src/assets/products/2/33e.jpg">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33e.jpg" data-zoomed="/src/assets/products/2/33e.jpg" class="js-zoomit" />
                </a>
                </li>
            </ul>
            {/* <!-- End product main image --> */}
            {/* <!-- Product thumbnails --> */}
            <ul class="product__thumbnails">
                <li>
                <a href="#" class="active js-product-thumbnail" data-id="0">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33a.jpg" />
                </a>
                </li>
                <li>
                <a href="#" class="js-product-thumbnail" data-id="1">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33b.jpg" />
                </a>
                </li>
                <li>
                <a href="#" class="js-product-thumbnail" data-id="2">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33c.jpg" />
                </a>
                </li>
                <li>
                <a href="#" class="js-product-thumbnail" data-id="3">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33d.jpg" />
                </a>
                </li>
                <li>
                <a href="#" class="js-product-thumbnail" data-id="4">
                    <img
                    alt="Image"
                    src="/src/assets/products/2/33e.jpg" />
                </a>
                </li>
            </ul>
            {/* <!-- End product thumbnails --> */}
            {/* <!-- Product right --> */}
            <div class="product__right">
                {/* <!-- Product title --> */}
                <h1 class="product__title">Suede sport shoes</h1>
                {/* <!-- End product title --> */}
                {/* <!-- Product reviews --> */}
                <div class="product__reviews d-none">
                <i class="lnir lnir-star-filled active"></i>
                <i class="lnir lnir-star-filled active"></i>
                <i class="lnir lnir-star-filled active"></i>
                <i class="lnir lnir-star-filled active"></i>
                <i class="lnir lnir-star-filled"></i>
                <span>3 reviews</span>
                </div>
                {/* <!-- End product reviews --> */}
                {/* <!-- Product price --> */}
                <div class="product__price">
                $45.5
                {/* <!-- <span class="product-price__new">$19.59</span> */}
                <span class="product-price__old">$28.5</span>
                </div>
                {/* <!-- End product price --> */}
                {/* <!-- Status --> */}
                <div class="product__status">
                <i class="lnir lnir-package"></i>
                <span>Status:</span>
                <span class="status__value status__value--in-stock">In stock</span>
                </div>  
                {/* <!-- End product status --> */}
                {/* <!-- Product description --> */}
                <div class="product__description">
                Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks
                </div>
                {/* <!-- End product description --> */}
                {/* <!-- Options --> */}
                <div class="product__options">
                {/* <!-- Product colors --> */}
                <div class="product__colors d-flex align-items-center">
                    {/* <!-- Available colors --> */}
                    <ul class="product__available-colors">
                    <li class="active"><a href="#" style={{ "background": "#503a2a" }} class="open-tooltip"><span class="custom-tooltip">Bold Brown</span></a></li>
                    <li><a href="#" style={{ "background": "#1c1b20" }} class="open-tooltip"><span class="custom-tooltip">Black</span></a></li>
                    </ul>
                    {/* <!-- End available colors --> */}
                    {/* <!-- Current color --> */}
                    <div class="product__current-color">Color: <span>Bold Brown</span></div>
                    {/* <!-- End current color --> */}
                </div>
                {/* <!-- End product colors --> */}
                {/* <!-- Product sizes --> */}
                <div class="product__sizes-2 d-flex align-items-center">
                    {/* <!-- Available sizes --> */}
                    <ul class="product__available-sizes">
                    <li><a href="#">39</a></li>
                    <li class="active"><a href="#">40</a></li>
                    <li><a href="#">41</a></li>
                    </ul>
                    {/* <!-- End available sizes --> */}
                    {/* <!-- Current size --> */}
                    <div class="product__current-size">Size: <span>40</span></div>
                    {/* <!-- End current size --> */}
                </div>
                {/* <!-- End product sizes --> */}
                </div>
                {/* <!-- End options --> */}
                {/* <!-- Product action -->  */}
                <div class="product__action js-product-action">
                {/* <!-- Product quantity and add to cart --> */}
                <div class="product__quantity-and-add-to-cart d-flex">
                    {/* <!-- Quantity --> */}
                    <div class="product__quantity">
                    <div class="product-quantity__minus js-quantity-down"><a href="#"><i class="lnil lnil-minus"></i></a></div>
                    <input type="text" value="2" class="product-quantity__input js-quantity-field" />
                    <div class="product-quantity__plus js-quantity-up"><a href="#"><i class="lnil lnil-plus"></i></a></div>
                    </div>  
                    {/* <!-- End quantity --> */}
                    {/* <!-- Add to cart --> */}
                    <div class="product__add-to-cart">
                    <a href="#" class="eighth-button">Add to cart</a>
                    </div>
                    {/* <!-- End add to cart --> */}
                </div>
                {/* <!-- End product quantity and add to cart --> */}
                {/* <!-- Buy now --> */}
                <div class="product__buy-now">
                    <a href="#" class="second-button">Buy now</a>
                </div>
                {/* <!-- End buy now --> */}
                </div>
                {/* <!-- End product action --> */}
                {/* <!-- Product second action --> */}
                <ul class="product__second-action d-flex">
                <li><a href="#"><i class="lnil lnil-heart"></i> Add to wishlist</a></li>
                <li><a href="#"><i class="lnil lnil-reload"></i> Compare</a></li>
                </ul>
                {/* <!-- End product section action --> */}
                {/* <!-- Product information --> */}
                <ul class="product__information">
                <li><span>SKU</span><p>SS-501</p></li>
                <li><span>Category</span><p>Men’s Clothing</p></li>
                <li><span>Tags</span><p><a href="#">shirt</a>, <a href="#">men</a>, <a href="#">basic</a>, <a href="#">cotton</a></p></li>
                <li><span>Brand</span><p><a href="#">Zara</a></p></li>
                </ul>
                {/* <!-- End product information --> */}
                {/* <!-- Product social --> */}
                <ul class="product__socials product__socials--type-2">
                <li><a href="https://twitter.com" target="_blank"><i class="lnil lnil-twitter"></i></a></li>
                <li><a href="https://facebook.com" target="_blank"><i class="lnil lnil-facebook"></i></a></li>
                <li><a href="https://instagram.com" target="_blank"><i class="lnil lnil-Instagram"></i></a></li>
                </ul>
                {/* <!-- End product social --> */}
            </div>
            {/* <!-- End product right --> */}
            </div>
            {/* <!-- End product main --> */}
            {/* <!-- Product tabs --> */}
            <div class="product__tabs-2">
            {/* <!-- Mobile tabs --> */}
            <div class="product__mobile-tabs">
                {/* <!-- Accordion --> */}
                <div class="accordion active js-accordion">
                {/* <!-- Title --> */}
                <div class="accordion__title js-accordion-title">
                    Description
                </div>
                {/* <!-- End title --> */}
                {/* <!-- Content --> */}
                <div class="accordion__content js-accordion-content">
                    <div class="row">
                    <div class="col-12 col-lg-6">
                        <h3>Introduce</h3>
                        <p>
                        Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. <br/>
                        Back slit. Two pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.
                        </p>
                        <div class="description__image">
                        <img
                            alt="Image"
                            data-sizes="auto"
                            data-srcset="/src/assets/images/default/product_description_3.jpg 1560w,
                            /src/assets/images/default/product_description_3.jpg 3120w"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            class="lazyload" />                    
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <h3>Material & Washing Instructions</h3>
                        <p>
                        Composition: 51% wool,45% polyester,2% acrylic,2% viscose. Lining: 53% cotton,47% polyester. <br/>
                        Sleeve lining: 100% polyester
                        </p>
                        <ul class="tab__features">
                        <li><p><img src="/src/assets/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                        <li><p><img src="/src/assets/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                        <li><p><img src="/src/assets/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                        <li><p><img src="/src/assets/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                        <li><p><img src="/src/assets/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
                        </ul>
                    </div>
                    </div>  
                </div>
                {/* <!-- End content --> */}
                </div>
                {/* <!-- End accordion --> */}
                {/* <!-- Accordion --> */}
                <div class="accordion js-accordion">
                {/* <!-- Title --> */}
                <div class="accordion__title js-accordion-title">
                    Ship & return
                </div>
                {/* <!-- End title --> */}
                {/* <!-- Content --> */}
                <div class="accordion__content js-accordion-content">
                    <h3>Shipping</h3>
                    <ul>
                    <li>Complimentary ground shipping within 1 to 7 business days</li>
                    <li>In-store collection available within 1 to 7 business days</li>
                    <li>Next-day and Express delivery options also available</li>
                    <li>Purchases are delivered in an orange box tied with a Bolduc ribbon.</li>
                    <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                    </ul>
                    <h3>Returns & Exchanges</h3>
                    <ul>
                    <li>Easy and complimentary, within 14 days</li>
                    <li>See conditions and procedure in our return FAQs</li>
                    <li>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</li>
                    </ul>
                </div>
                {/* <!-- End content --> */}
                </div>
                {/* <!-- End accordion --> */}
                {/* <!-- Accordion --> */}
                <div class="accordion js-accordion">
                {/* <!-- Title --> */}
                <div class="accordion__title js-accordion-title">
                    Review (3)
                </div>
                {/* <!-- End title --> */}
                {/* <!-- Content --> */}
                <div class="accordion__content js-accordion-content">
                    <h3 class="review__title">Customer’s Review (2)</h3>
                    {/* <!-- Review --> */}
                    <div class="review d-flex">
                    {/* <!-- Avatar --> */}
                    <div class="review__avatar">
                        <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/images/default/avatar_1.jpg 1560w,
                        /src/assets/images/default/avatar_1.jpg 3120w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </div>
                    {/* <!-- End avatar --> */}
                    {/* <!-- Details --> */}
                    <div class="review__details">
                        {/* <!-- Title and rating --> */}
                        <div class="review__title-and-rating d-flex">
                        {/* <!-- Name --> */}
                        <div class="review__title">Quality product & very comfortable!</div>
                        {/* <!-- End name --> */}
                        {/* <!-- Rating --> */}
                        <div class="review__rating">
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                        </div>
                        {/* <!-- End rating --> */}
                        </div>
                        {/* <!-- End title and rating --> */}
                        {/* <!-- Content --> */}
                        <div class="review__content">Thanks to the precious advice of the store owner, I choose this wonderful product. I absolutely love it! Additionally, my order was sent very quickly. I'm a happy customer and I'll order again!</div>
                        {/* <!-- End content --> */}
                        {/* <!-- Meta --> */}
                        <div class="review__meta">
                        <span>andy robertson.</span>  on 25 April, 2022
                        </div>
                        {/* <!-- End meta --> */}
                    </div>
                    {/* <!-- End details --> */}
                    </div>
                    {/* <!-- End review --> */}
                    {/* <!-- Review --> */}
                    <div class="review d-flex">
                    {/* <!-- Avatar --> */}
                    <div class="review__avatar">
                        <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/images/default/avatar_2.jpg 1560w,
                        /src/assets/images/default/avatar_2.jpg 3120w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </div>
                    {/* <!-- End avatar --> */}
                    {/* <!-- Details --> */}
                    <div class="review__details">
                        {/* <!-- Title and rating --> */}
                        <div class="review__title-and-rating d-flex align">
                        {/* <!-- Name --> */}
                        <div class="review__title">Awesome product</div>
                        {/* <!-- End name --> */}
                        {/* <!-- Rating --> */}
                        <div class="review__rating">
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                        </div>
                        {/* <!-- End rating --> */}
                        </div>
                        {/* <!-- End title and rating --> */}
                        {/* <!-- Content --> */}
                        <div class="review__content">I love it & certainly that i'll buy it once again. Perfection experience!</div>
                        {/* <!-- End content --> */}
                        {/* <!-- Meta --> */}
                        <div class="review__meta">
                        <span>Alexander Arnold.</span>  on 25 April, 2022
                        </div>
                        {/* <!-- End meta --> */}
                    </div>
                    {/* <!-- End details --> */}
                    </div>
                    {/* <!-- End review --> */}
                    <h3>Add A Review</h3>
                    {/* <!-- Form --> */}
                    <form class="review__form">
                    {/* <!-- Required fields --> */}
                    <div class="form__required-fields">Your email address will not be published. Required fields are marked<span>*</span></div>
                    {/* <!-- End required fields --> */}
                    {/* <!-- Your rating --> */}
                    <div class="form__your-rating d-flex align-items-center">
                        <div class="your-rating__title">Your rating</div>
                        <div class="your-rating__content js-rating-content">
                        <i class="lnir lnir-star-filled js-rating" data-value="1"></i>
                        <i class="lnir lnir-star-filled js-rating" data-value="2"></i>
                        <i class="lnir lnir-star-filled js-rating" data-value="3"></i>
                        <i class="lnir lnir-star-filled js-rating" data-value="4"></i>
                        <i class="lnir lnir-star-filled js-rating" data-value="5"></i>
                        <div class="d-none">
                            <input type="radio" name="rating" class="js-rating-input" value="1" />
                            <input type="radio" name="rating" class="js-rating-input" value="2" />
                            <input type="radio" name="rating" class="js-rating-input" value="3" />
                            <input type="radio" name="rating" class="js-rating-input" value="4" />
                            <input type="radio" name="rating" class="js-rating-input" value="5" />
                        </div>
                        </div>
                    </div>
                    {/* <!-- End your rating --> */}
                    {/* <!-- Form group --> */}
                    <div class="form-group">
                        <input type="text" name="subject" class="form-group__input" placeholder="Give your review a tittle " />
                    </div>
                    {/* <!-- End form group --> */}
                    {/* <!-- Form group --> */}
                    <div class="form-group">
                        <textarea placeholder="Write your review here" class="form-group__textarea" rows="3"></textarea>
                    </div>
                    {/* <!-- End form group --> */}
                    {/* <!-- Row --> */}
                    <div class="row">
                        <div class="col-md-6">
                        {/* <!-- Form group --> */}
                        <div class="form-group">
                            <input type="text" name="name" class="form-group__input" placeholder="Full Name" />
                        </div>
                        {/* <!-- End form group --> */}
                        </div>
                        <div class="col-md-6">
                        {/* <!-- Form group --> */}
                        <div class="form-group">
                            <input type="email" name="email" class="form-group__input" placeholder="Your E-mail*" />
                        </div>
                        {/* <!-- End form group --> */}
                        </div>
                    </div>
                    {/* <!-- End row --> */}
                    {/* <!-- Form checkbox --> */}
                    <div class="form-checkbox">
                        <input type="checkbox" id="checkbox1" class="form-checkbox__input" />
                        <label class="form-checkbox__label" for="checkbox1">Save my name & email in this browser for next time i comment</label>
                    </div>
                    {/* <!-- End form checkbox --> */}
                    {/* <!-- Action --> */}
                    <div class="form__action">
                        <button type="submit" class="second-button">Submit review</button>
                    </div>
                    {/* <!-- End action --> */}
                    </form>
                    {/* <!-- End form --> */}
                </div>
                {/* <!-- End content --> */}
                </div>
                {/* <!-- End accordion --> */}
                {/* <!-- Accordion --> */}
                <div class="accordion js-accordion">
                {/* <!-- Title --> */}
                <div class="accordion__title js-accordion-title">
                    Ask a question
                </div>
                {/* <!-- End title --> */}
                {/* <!-- Content --> */}
                <div class="accordion__content js-accordion-content">
                    {/* <!-- Form --> */}
                    <form class="contact-page__form">
                    {/* <!-- Form group --> */}
                    <div class="form-group">
                        <input type="text" name="subject" class="form-group__input" placeholder="Subject (optional)" />
                    </div>
                    {/* <!-- End form group --> */}
                    {/* <!-- Form group --> */}
                    <div class="form-group">
                        <textarea placeholder="Write your question here" class="form-group__textarea" rows="5"></textarea>
                    </div>
                    {/* <!-- End form group --> */}
                    {/* <!-- Row --> */}
                    <div class="row">
                        <div class="col-md-6">
                        {/* <!-- Form group --> */}
                        <div class="form-group">
                            <input type="text" name="name" class="form-group__input" placeholder="Full Name" />
                        </div>
                        {/* <!-- End form group --> */}
                        </div>
                        <div class="col-md-6">
                        {/* <!-- Form group --> */}
                        <div class="form-group">
                            <input type="email" name="email" class="form-group__input" placeholder="Your E-mail*" />
                        </div>
                        {/* <!-- End form group --> */}
                        </div>
                    </div>
                    {/* <!-- End row --> */}
                    {/* <!-- Action --> */}
                    <div class="form__action">
                        <button type="submit" class="second-button">Ask a question</button>
                    </div>
                    {/* <!-- End action --> */}
                    </form>
                    {/* <!-- End form --> */}
                </div>
                {/* <!-- End content --> */}
                </div>
                {/* <!-- End accordion --> */}
            </div>
            {/* <!-- End mobile tabs --> */}
            {/* <!-- Desktop tabs --> */}
            <div class="product__desktop-tabs">
                <ul class="tabs__nav">
                <li>
                    <a href="#" class="active js-tab-link" data-id="1">Description</a>
                </li>
                <li>
                    <a href="#" class="js-tab-link" data-id="2">Ship & return</a>
                </li>
                <li>
                    <a href="#" class="js-tab-link" data-id="3">Review (1)</a>
                </li>
                <li>
                    <a href="#" class="js-tab-link" data-id="4">Ask a question</a>
                </li>
                </ul>
                <div class="tabs__content">
                {/* <!-- Description tab --> */}
                <div class="tab-content tab-content__active tab-content__show js-tab-content" data-id="1">
                    <div class="row">
                    <div class="col-12 col-lg-12">
                        <h3>Introduce</h3>
                        <p>
                        Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. <br />
                        Back slit. Two pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.
                        </p>
                        <div class="description__image">
                        <img
                            alt="Image"
                            data-sizes="auto"
                            data-srcset="/src/assets/images/default/product_description_3.jpg 1560w,
                            /src/assets/images/default/product_description_3.jpg 3120w"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            class="lazyload" />                    
                        </div>
                    </div>
                    <div class="col-12 col-lg-12">
                        <h3>Material & Washing Instructions</h3>
                        <p>
                        Composition: 51% wool,45% polyester,2% acrylic,2% viscose. Lining: 53% cotton,47% polyester. <br />
                        Sleeve lining: 100% polyester
                        </p>
                        <ul class="tab__features">
                        <li><p><img src="/src/assets/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                        <li><p><img src="/src/assets/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                        <li><p><img src="/src/assets/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                        <li><p><img src="/src/assets/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                        <li><p><img src="/src/assets/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
                        </ul>
                    </div>
                    </div>  
                </div>
                {/* <!-- End description tab --> */}
                {/* <!-- Ship & return tab --> */}
                <div class="tab-content js-tab-content" data-id="2">
                    <div class="row">
                    <div class="col-12 col-lg-12">
                        <h3>Shipping</h3>
                        <ul>
                        <li>Complimentary ground shipping within 1 to 7 business days</li>
                        <li>In-store collection available within 1 to 7 business days</li>
                        <li>Next-day and Express delivery options also available</li>
                        <li>Purchases are delivered in an orange box tied with a Bolduc ribbon.</li>
                        <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-12">
                        <h3>Returns & Exchanges</h3>
                        <ul>
                        <li>Easy and complimentary, within 14 days</li>
                        <li>See conditions and procedure in our return FAQs</li>
                        <li>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* <!-- End ship & return tab --> */}
                {/* <!-- Reviews tab --> */}
                <div class="tab-content js-tab-content" data-id="3">
                    <div class="row">
                    <div class="col-12 col-lg-12">
                        <h3 class="review__title">Customer’s Review (2)</h3>
                        {/* <!-- Review --> */}
                        <div class="review d-flex">
                        {/* <!-- Avatar --> */}
                        <div class="review__avatar">
                            <img
                            alt="Image"
                            data-sizes="auto"
                            data-srcset="/src/assets/images/default/avatar_1.jpg 1560w,
                            /src/assets/images/default/avatar_1.jpg 3120w"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            class="lazyload" />
                        </div>
                        {/* <!-- End avatar --> */}
                        {/* <!-- Details --> */}
                        <div class="review__details">
                            {/* <!-- Title and rating --> */}
                            <div class="review__title-and-rating d-flex">
                            {/* <!-- Name --> */}
                            <div class="review__title">Quality product & very comfortable!</div>
                            {/* <!-- End name --> */}
                            {/* <!-- Rating --> */}
                            <div class="review__rating">
                                <i class="lnir lnir-star-filled active"></i>
                                <i class="lnir lnir-star-filled active"></i>
                                <i class="lnir lnir-star-filled active"></i>
                                <i class="lnir lnir-star-filled active"></i>
                                <i class="lnir lnir-star-filled active"></i>
                            </div>
                            {/* <!-- End rating --> */}
                            </div>
                            {/* <!-- End title and rating --> */}
                            {/* <!-- Content --> */}
                            <div class="review__content">Thanks to the precious advice of the store owner, I choose this wonderful product. I absolutely love it! Additionally, my order was sent very quickly. I'm a happy customer and I'll order again!</div>
                            {/* <!-- End content --> */}
                            {/* <!-- Meta --> */}
                            <div class="review__meta">
                            <span>andy robertson.</span>  on 25 April, 2022
                            </div>
                            {/* <!-- End meta --> */}
                        </div>
                        {/* <!-- End details --> */}
                        </div>
                        {/* <!-- End review --> */}
                        {/* <!-- Review --> */}
                        <div class="review d-flex">
                        {/* <!-- Avatar --> */}
                        <div class="review__avatar">
                            <img
                            alt="Image"
                            data-sizes="auto"
                            data-srcset="/src/assets/images/default/avatar_2.jpg 1560w,
                            /src/assets/images/default/avatar_2.jpg 3120w"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            class="lazyload" />
                        </div>
                        {/* <!-- End avatar --> */}
                        {/* <!-- Details --> */}
                        <div class="review__details">
                            {/* <!-- Title and rating --> */}
                            <div class="review__title-and-rating d-flex align">
                            {/* <!-- Name --> */}
                            <div class="review__title">Awesome product</div>
                            {/* <!-- End name --> */}
                            {/* <!-- Rating --> */}
                            <div class="review__rating">
                                <i class="lnir lnir-star-filled active"></i>
                                <i class="lnir lnir-star-filled active"></i>
                                <i class="lnir lnir-star-filled active"></i>
                                <i class="lnir lnir-star-filled active"></i>
                                <i class="lnir lnir-star-filled active"></i>
                            </div>
                            {/* <!-- End rating --> */}
                            </div>
                            {/* <!-- End title and rating --> */}
                            {/* <!-- Content --> */}
                            <div class="review__content">I love it & certainly that i’ll buy it once again. Perfection experience!</div>
                            {/* <!-- End content --> */}
                            {/* <!-- Meta --> */}
                            <div class="review__meta">
                            <span>Alexander Arnold.</span>  on 25 April, 2022
                            </div>
                            {/* <!-- End meta --> */}
                        </div>
                        {/* <!-- End details --> */}
                        </div>
                        {/* <!-- End review --> */}
                    </div>
                    <div class="col-12 col-lg-12">
                        <h3>Add A Review</h3>
                        {/* <!-- Form --> */}
                        <form class="review__form">
                        {/* <!-- Required fields --> */}
                        <div class="form__required-fields">Your email address will not be published. Required fields are marked<span>*</span></div>
                        {/* <!-- End required fields --> */}
                        {/* <!-- Your rating --> */}
                        <div class="form__your-rating d-flex align-items-center">
                            <div class="your-rating__title">Your rating</div>
                            <div class="your-rating__content js-rating-content">
                            <i class="lnir lnir-star-filled js-rating" data-value="1"></i>
                            <i class="lnir lnir-star-filled js-rating" data-value="2"></i>
                            <i class="lnir lnir-star-filled js-rating" data-value="3"></i>
                            <i class="lnir lnir-star-filled js-rating" data-value="4"></i>
                            <i class="lnir lnir-star-filled js-rating" data-value="5"></i>
                            <div class="d-none">
                                <input type="radio" name="rating" class="js-rating-input" value="1" />
                                <input type="radio" name="rating" class="js-rating-input" value="2" />
                                <input type="radio" name="rating" class="js-rating-input" value="3" />
                                <input type="radio" name="rating" class="js-rating-input" value="4" />
                                <input type="radio" name="rating" class="js-rating-input" value="5" />
                            </div>
                            </div>
                        </div>
                        {/* <!-- End your rating --> */}
                        {/* <!-- Form group --> */}
                        <div class="form-group">
                            <input type="text" name="subject" class="form-group__input" placeholder="Give your review a tittle " />
                        </div>
                        {/* <!-- End form group --> */}
                        {/* <!-- Form group --> */}
                        <div class="form-group">
                            <textarea placeholder="Write your review here" class="form-group__textarea" rows="3"></textarea>
                        </div>
                        {/* <!-- End form group --> */}
                        {/* <!-- Row --> */}
                        <div class="row">
                            <div class="col-md-6">
                            {/* <!-- Form group --> */}
                            <div class="form-group">
                                <input type="text" name="name" class="form-group__input" placeholder="Full Name" />
                            </div>
                            {/* <!-- End form group --> */}
                            </div>
                            <div class="col-md-6">
                            {/* <!-- Form group --> */}
                            <div class="form-group">
                                <input type="email" name="email" class="form-group__input" placeholder="Your E-mail*" />
                            </div>
                            {/* <!-- End form group --> */}
                            </div>
                        </div>
                        {/* <!-- End row --> */}
                        {/* <!-- Form checkbox --> */}
                        <div class="form-checkbox">
                            <input type="checkbox" id="checkbox1" class="form-checkbox__input" />
                            <label class="form-checkbox__label" for="checkbox1">Save my name & email in this browser for next time i comment</label>
                        </div>
                        {/* <!-- End form checkbox --> */}
                        {/* <!-- Action --> */}
                        <div class="form__action">
                            <button type="submit" class="second-button">Submit review</button>
                        </div>
                        {/* <!-- End action --> */}
                        </form>
                        {/* <!-- End form --> */}
                    </div>
                    </div>
                </div>
                {/* <!-- End reviews tab --> */}
                {/* <!-- Ask a question tab --> */}
                <div class="tab-content js-tab-content" data-id="4">
                    {/* <!-- Row --> */}
                    <div class="row">
                    <div class="col-12 col-lg-12">
                        <h3>Ask a question</h3>
                        {/* <!-- Form --> */}
                        <form class="contact-page__form">
                        {/* <!-- Form group --> */}
                        <div class="form-group">
                            <input type="text" name="subject" class="form-group__input" placeholder="Subject (optional)" />
                        </div>
                        {/* <!-- End form group --> */}
                        {/* <!-- Form group --> */}
                        <div class="form-group">
                            <textarea placeholder="Write your question here" class="form-group__textarea" rows="5"></textarea>
                        </div>
                        {/* <!-- End form group --> */}
                        {/* <!-- Row --> */}
                        <div class="row">
                            <div class="col-md-6">
                            {/* <!-- Form group --> */}
                            <div class="form-group">
                                <input type="text" name="name" class="form-group__input" placeholder="Full Name" />
                            </div>
                            {/* <!-- End form group --> */}
                            </div>
                            <div class="col-md-6">
                            {/* <!-- Form group --> */}
                            <div class="form-group">
                                <input type="email" name="email" class="form-group__input" placeholder="Your E-mail*" />
                            </div>
                            {/* <!-- End form group --> */}
                            </div>
                        </div>
                        {/* <!-- End row --> */}
                        {/* <!-- Action --> */}
                        <div class="form__action">
                            <button type="submit" class="second-button">Ask a question</button>
                        </div>
                        {/* <!-- End action --> */}
                        </form>
                        {/* <!-- End form --> */}
                    </div>
                    </div>
                    {/* <!-- End row --> */}
                </div>
                {/* <!-- End ask a question tab --> */}
                </div>
            </div>
            {/* <!-- End desktop tabs --> */}
            </div>
            {/* <!-- End product tabs --> */}
        </div>
        {/* <!-- End container --> */}
        </div>
        {/* <!-- End product --> */}
        {/* <!-- Our products --> */}
        <div class="our-products classic-limited-edition classic-limited-edition--type-2">
        {/* <!-- Container --> */}
        <div class="container">
            {/* <!-- Title --> */}
            <h4 class="our-products__title">Limited Edition</h4>
            {/* <!-- End title --> */}
            {/* <!-- Slick products --> */}
            <div class="our_products__products js-home-classic-our-products-2">
            {/* <!-- Product --> */}
            <div class="product-grid-item product-grid-item--type-2 product-grid-item--type-4">
                {/* <!-- Wishlist --> */}
                <div class="product-grid-item__wishlist-top-right"><a href="#"><i class="lnil lnil-heart"></i></a></div>
                {/* <!-- End wishlist --> */}
                {/* <!-- Product images --> */}
                <div class="product-grid-item__images product-grid-item__images--ratio-100-122 js-product-grid-images" data-current-image="0">
                {/* <!-- Product images arrows --> */}
                <div class="product-grid-item__images-arrows">
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__previous-image js-product-grid-previous-image"><i class="lnil lnil-chevron-left"></i></div>
                    {/* <!-- End previous --> */}
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__next-image js-product-grid-next-image"><i class="lnil lnil-chevron-right"></i></div>
                    {/* <!-- End previous --> */}
                </div>
                {/* <!-- End product images arrows --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image active">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/26a.jpg 400w,
                        /src/assets/products/2/26a.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/26b.jpg 400w,
                        /src/assets/products/2/26b.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->     */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/26c.jpg 400w,
                        /src/assets/products/2/26c.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->    */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/26d.jpg 400w,
                        /src/assets/products/2/26d.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->  */}
                </div>
                {/* <!-- End product images --> */}
                {/* <!-- Product action --> */}
                <div class="product-grid-item__classic-action">
                {/* <!-- D-flex --> */}
                <div class="d-flex align-items-center">
                    {/* <!-- Add to cart --> */}
                    <div class="product-grid-item__classic-add-to-cart">
                    <a href="#" class="open-tooltip">Add to cart</a>
                    </div>
                    {/* <!-- End to cart --> */}
                </div>
                {/* <!-- End d-flex --> */}
                </div>
                {/* <!-- End product action --> */}
                {/* <!-- Product feature --> */}
                <div class="product-grid-item__feature">Legendary</div>
                {/* <!-- End product feature --> */}
                {/* <!-- Product name --> */}
                <div class="product-grid-item__name">
                <a href="product.html">Legendary Whitetails Men's Shotgun Western Long Sleeve Shirt</a>
                </div>
                {/* <!-- End product name --> */}
                {/* <!-- Product price --> */}
                <div class="product-grid-item__price">
                {/* <!-- Price new --> */}
                <span class="product-grid-item__price-new">$49.5</span>
                {/* <!-- End price new --> */}
                {/* <!-- Price old --> */}
                <span class="product-grid-item__price-old">$68.5</span>
                {/* <!-- End price old --> */}
                </div>
                {/* <!-- End product price --> */}
            </div>
            {/* <!-- End Product --> */}
            {/* <!-- Product --> */}
            <div class="product-grid-item product-grid-item--type-2 product-grid-item--type-4">
                {/* <!-- Wishlist --> */}
                <div class="product-grid-item__wishlist-top-right"><a href="#"><i class="lnil lnil-heart"></i></a></div>
                {/* <!-- End wishlist --> */}
                {/* <!-- Product images --> */}
                <div class="product-grid-item__images product-grid-item__images--ratio-100-122 js-product-grid-images" data-current-image="0">
                {/* <!-- Product images arrows --> */}
                <div class="product-grid-item__images-arrows">
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__previous-image js-product-grid-previous-image"><i class="lnil lnil-chevron-left"></i></div>
                    {/* <!-- End previous --> */}
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__next-image js-product-grid-next-image"><i class="lnil lnil-chevron-right"></i></div>
                    {/* <!-- End previous --> */}
                </div>
                {/* <!-- End product images arrows --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image active">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/27_1-a.jpg 400w,
                        /src/assets/products/2/27_1-a.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/27_1-b.jpg 400w,
                        /src/assets/products/2/27_1-b.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->     */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/27_1-c.jpg 400w,
                        /src/assets/products/2/27_1-c.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->    */}
                </div>
                {/* <!-- End product images --> */}
                {/* <!-- Product action --> */}
                <div class="product-grid-item__classic-action">
                {/* <!-- D-flex --> */}
                <div class="d-flex align-items-center">
                    {/* <!-- Add to cart --> */}
                    <div class="product-grid-item__classic-add-to-cart">
                    <a href="#" class="open-tooltip">Add to cart</a>
                    </div>
                    {/* <!-- End to cart --> */}
                </div>
                {/* <!-- End d-flex --> */}
                </div>
                {/* <!-- End product action --> */}
                {/* <!-- Product image colors --> */}
                <ul class="product-grid-item__image-colors">
                <li><a href="#" class="product-grid-item__image-color active"><img src="/src/assets/products/2/27_1-a.jpg" alt="Image color" /></a></li>
                <li><a href="#" class="product-grid-item__image-color"><img src="/src/assets/products/2/31a.jpg" alt="Image color" /></a></li>
                </ul>
                {/* <!-- End product image colors --> */}
                {/* <!-- Product name --> */}
                <div class="product-grid-item__name">
                <a href="product.html">Legendary Whitetails Men's</a>
                </div>
                {/* <!-- End product name --> */}
                {/* <!-- Product price --> */}
                <div class="product-grid-item__price">$69.99</div>
                {/* <!-- End product price --> */}
            </div>
            {/* <!-- End Product --> */}
            {/* <!-- Product --> */}
            <div class="product-grid-item product-grid-item--type-2 product-grid-item--type-4">
                {/* <!-- Wishlist --> */}
                <div class="product-grid-item__wishlist-top-right"><a href="#"><i class="lnil lnil-heart"></i></a></div>
                {/* <!-- End wishlist --> */}
                {/* <!-- Product images --> */}
                <div class="product-grid-item__images product-grid-item__images--ratio-100-122 js-product-grid-images" data-current-image="0">
                {/* <!-- Product images arrows --> */}
                <div class="product-grid-item__images-arrows">
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__previous-image js-product-grid-previous-image"><i class="lnil lnil-chevron-left"></i></div>
                    {/* <!-- End previous --> */}
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__next-image js-product-grid-next-image"><i class="lnil lnil-chevron-right"></i></div>
                    {/* <!-- End previous --> */}
                </div>
                {/* <!-- End product images arrows --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image active">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/28a.jpg 400w,
                        /src/assets/products/2/28a.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/28b.jpg 400w,
                        /src/assets/products/2/28b.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->     */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/28c.jpg 400w,
                        /src/assets/products/2/28c.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->    */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/28d.jpg 400w,
                        /src/assets/products/2/28d.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->  */}
                </div>
                {/* <!-- End product images --> */}
                {/* <!-- Product action --> */}
                <div class="product-grid-item__classic-action">
                {/* <!-- D-flex --> */}
                <div class="d-flex align-items-center">
                    {/* <!-- Add to cart --> */}
                    <div class="product-grid-item__classic-add-to-cart">
                    <a href="#" class="open-tooltip">Add to cart</a>
                    </div>
                    {/* <!-- End to cart --> */}
                </div>
                {/* <!-- End d-flex --> */}
                </div>
                {/* <!-- End product action --> */}
                {/* <!-- Product feature --> */}
                <div class="product-grid-item__feature">Clark</div>
                {/* <!-- End product feature --> */}
                {/* <!-- Product name --> */}
                <div class="product-grid-item__name">
                <a href="product.html">Nunn Bush Men's Barklay Canvas Plain Toe Oxford Lace Up</a>
                </div>
                {/* <!-- End product name --> */}
                {/* <!-- Product price --> */}
                <div class="product-grid-item__price">$42.88</div>
                {/* <!-- End product price --> */}
            </div>
            {/* <!-- End Product --> */}
            {/* <!-- Product --> */}
            <div class="product-grid-item product-grid-item--type-2 product-grid-item--type-4">
                {/* <!-- Wishlist --> */}
                <div class="product-grid-item__wishlist-top-right"><a href="#"><i class="lnil lnil-heart"></i></a></div>
                {/* <!-- End wishlist --> */}
                {/* <!-- Product images --> */}
                <div class="product-grid-item__images product-grid-item__images--ratio-100-122 js-product-grid-images" data-current-image="0">
                {/* <!-- Product images arrows --> */}
                <div class="product-grid-item__images-arrows">
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__previous-image js-product-grid-previous-image"><i class="lnil lnil-chevron-left"></i></div>
                    {/* <!-- End previous --> */}
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__next-image js-product-grid-next-image"><i class="lnil lnil-chevron-right"></i></div>
                    {/* <!-- End previous --> */}
                </div>
                {/* <!-- End product images arrows --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image active">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/29a.jpg 400w,
                        /src/assets/products/2/29a.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/29b.jpg 400w,
                        /src/assets/products/2/29b.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->     */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/29c.jpg 400w,
                        /src/assets/products/2/29c.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->    */}
                </div>
                {/* <!-- End product images --> */}
                {/* <!-- Product action --> */}
                <div class="product-grid-item__classic-action">
                {/* <!-- D-flex --> */}
                <div class="d-flex align-items-center">
                    {/* <!-- Add to cart --> */}
                    <div class="product-grid-item__classic-add-to-cart">
                    <a href="#" class="open-tooltip">Add to cart</a>
                    </div>
                    {/* <!-- End to cart --> */}
                </div>
                {/* <!-- End d-flex --> */}
                </div>
                {/* <!-- End product action --> */}
                {/* <!-- Product feature --> */}
                <div class="product-grid-item__feature">Rayban</div>
                {/* <!-- End product feature --> */}
                {/* <!-- Product name --> */}
                <div class="product-grid-item__name">
                <a href="product.html">Round Steampunk Sunglasses</a>
                </div>
                {/* <!-- End product name --> */}
                {/* <!-- Product price --> */}
                <div class="product-grid-item__price">
                {/* <!-- Price new --> */}
                <span class="product-grid-item__price-new">$79.5</span>
                {/* <!-- End price new --> */}
                {/* <!-- Price old --> */}
                <span class="product-grid-item__price-old">$99.5</span>
                {/* <!-- End price old --> */}
                </div>
                {/* <!-- End product price --> */}
            </div>
            {/* <!-- End Product --> */}
            {/* <!-- Product --> */}
            <div class="product-grid-item product-grid-item--type-2 product-grid-item--type-4">
                {/* <!-- Wishlist --> */}
                <div class="product-grid-item__wishlist-top-right"><a href="#"><i class="lnil lnil-heart"></i></a></div>
                {/* <!-- End wishlist --> */}
                {/* <!-- Product images --> */}
                <div class="product-grid-item__images product-grid-item__images--ratio-100-122 js-product-grid-images" data-current-image="0">
                {/* <!-- Product images arrows --> */}
                <div class="product-grid-item__images-arrows">
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__previous-image js-product-grid-previous-image"><i class="lnil lnil-chevron-left"></i></div>
                    {/* <!-- End previous --> */}
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__next-image js-product-grid-next-image"><i class="lnil lnil-chevron-right"></i></div>
                    {/* <!-- End previous --> */}
                </div>
                {/* <!-- End product images arrows --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image active">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/33a.jpg 400w,
                        /src/assets/products/2/33a.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/33b.jpg 400w,
                        /src/assets/products/2/33b.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->     */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/33c.jpg 400w,
                        /src/assets/products/2/33c.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->    */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/33d.jpg 400w,
                        /src/assets/products/2/33d.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->  */}
                </div>
                {/* <!-- End product images --> */}
                {/* <!-- Product action --> */}
                <div class="product-grid-item__classic-action">
                {/* <!-- D-flex --> */}
                <div class="d-flex align-items-center">
                    {/* <!-- Add to cart --> */}
                    <div class="product-grid-item__classic-add-to-cart">
                    <a href="#" class="open-tooltip">Add to cart</a>
                    </div>
                    {/* <!-- End to cart --> */}
                </div>
                {/* <!-- End d-flex --> */}
                </div>
                {/* <!-- End product action --> */}
                {/* <!-- Product name --> */}
                <div class="product-grid-item__name">
                <a href="product.html">Simple text for name product</a>
                </div>
                {/* <!-- End product name --> */}
                {/* <!-- Product price --> */}
                <div class="product-grid-item__price">
                {/* <!-- Price new --> */}
                <span class="product-grid-item__price-new">$49.5</span>
                {/* <!-- End price new --> */}
                {/* <!-- Price old --> */}
                <span class="product-grid-item__price-old">$68.5</span>
                {/* <!-- End price old --> */}
                </div>
                {/* <!-- End product price --> */}
            </div>
            {/* <!-- End Product --> */}
            {/* <!-- Product --> */}
            <div class="product-grid-item product-grid-item--type-2 product-grid-item--type-4">
                {/* <!-- Wishlist --> */}
                <div class="product-grid-item__wishlist-top-right"><a href="#"><i class="lnil lnil-heart"></i></a></div>
                {/* <!-- End wishlist --> */}
                {/* <!-- Product images --> */}
                <div class="product-grid-item__images product-grid-item__images--ratio-100-122 js-product-grid-images" data-current-image="0">
                {/* <!-- Product images arrows --> */}
                <div class="product-grid-item__images-arrows">
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__previous-image js-product-grid-previous-image"><i class="lnil lnil-chevron-left"></i></div>
                    {/* <!-- End previous --> */}
                    {/* <!-- Previous --> */}
                    <div class="product-grid-item__next-image js-product-grid-next-image"><i class="lnil lnil-chevron-right"></i></div>
                    {/* <!-- End previous --> */}
                </div>
                {/* <!-- End product images arrows --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image active">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/35a.jpg 400w,
                        /src/assets/products/2/35a.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image --> */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/35b.jpg 400w,
                        /src/assets/products/2/35b.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->     */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/35c.jpg 400w,
                        /src/assets/products/2/35c.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->    */}
                {/* <!-- Product image --> */}
                <div class="product-grid-item__image js-product-grid-image">
                    <a href="product.html">
                    <img
                        alt="Image"
                        data-sizes="auto"
                        data-srcset="/src/assets/products/2/35d.jpg 400w,
                        /src/assets/products/2/35d.jpg 800w"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        class="lazyload" />
                    </a>
                </div>
                {/* <!-- End product image -->  */}
                </div>
                {/* <!-- End product images --> */}
                {/* <!-- Product action --> */}
                <div class="product-grid-item__classic-action">
                {/* <!-- D-flex --> */}
                <div class="d-flex align-items-center">
                    {/* <!-- Add to cart --> */}
                    <div class="product-grid-item__classic-add-to-cart">
                    <a href="#" class="open-tooltip">Add to cart</a>
                    </div>
                    {/* <!-- End to cart --> */}
                </div>
                {/* <!-- End d-flex --> */}
                </div>
                {/* <!-- End product action --> */}
                {/* <!-- Product name --> */}
                <div class="product-grid-item__name">
                <a href="product.html">Simple text for name product</a>
                </div>
                {/* <!-- End product name --> */}
                {/* <!-- Product price --> */}
                <div class="product-grid-item__price">
                {/* <!-- Price new --> */}
                <span class="product-grid-item__price-new">$49.5</span>
                {/* <!-- End price new --> */}
                {/* <!-- Price old --> */}
                <span class="product-grid-item__price-old">$68.5</span>
                {/* <!-- End price old --> */}
                </div>
                {/* <!-- End product price --> */}
            </div>
            {/* <!-- End Product --> */}
            </div>
            {/* <!-- End slick products --> */}
        </div>
        {/* <!-- End container --> */}
        </div>
    </>
  )
}
