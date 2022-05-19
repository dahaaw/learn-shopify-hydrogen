import React from 'react'

export default function ProductDetailTabs() {
  return (
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
                      data-srcset="/assets/images/default/product_description_3.jpg 1560w,
                      /assets/images/default/product_description_3.jpg 3120w"
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
                  <li><p><img src="/assets/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                  <li><p><img src="/assets/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                  <li><p><img src="/assets/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                  <li><p><img src="/assets/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                  <li><p><img src="/assets/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
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
                  data-srcset="/assets/images/default/avatar_1.jpg 1560w,
                  /assets/images/default/avatar_1.jpg 3120w"
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
                  data-srcset="/assets/images/default/avatar_2.jpg 1560w,
                  /assets/images/default/avatar_2.jpg 3120w"
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
                      data-srcset="/assets/images/default/product_description_3.jpg 1560w,
                      /assets/images/default/product_description_3.jpg 3120w"
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
                  <li><p><img src="/assets/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                  <li><p><img src="/assets/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                  <li><p><img src="/assets/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                  <li><p><img src="/assets/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                  <li><p><img src="/assets/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
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
                      data-srcset="/assets/images/default/avatar_1.jpg 1560w,
                      /assets/images/default/avatar_1.jpg 3120w"
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
                      data-srcset="/assets/images/default/avatar_2.jpg 1560w,
                      /assets/images/default/avatar_2.jpg 3120w"
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
  )
}
