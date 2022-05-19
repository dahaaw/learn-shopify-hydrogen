import React from 'react'

export default function Newslater() {
  return (
    <div className="classic-newsletter">
        {/* Container */}
        <div className="container">
            {/* Second container */}
            <div className="classic-newsletter__container">
            {/* Image */}
            <div className="classic-newsletter__background-image">
                <img src="/src/assets/images/classic/newsletter.png" alt="Newsletter" />
            </div>
            {/* End image */}
            {/* Row */}
            <div className="row">
                <div className="col-md-4">
                {/* Title */}
                <div className="classic-newsletter__title">
                    <span>Newsletter</span>
                    <h4>Get <span>10%</span> discount for next item</h4>
                </div>
                {/* End title */}
                </div>  
                <div className="col-md-8">
                {/* Right */}
                <div className="classic-newsletter__right">
                    {/* Description */}
                    <div className="classic-newsletter__description">
                    Be the first to get the latest news about trends, promotions and much more. Don’t worry, we not spam!
                    </div>
                    {/* End description */}
                    {/* Form */}
                    <form className="classic-newsletter-form">
                    {/* Newsletter input */}
                    <input type="email" className="classic-newsleter-input" placeholder="Enter your email address" />
                    {/* End newsletter input */}
                    {/* Newsletter button */}
                    <button type="submit" className="classic-newsletter-button">Subscribe</button>
                    {/* End newsletter button */}
                    </form>
                    {/* End form */}
                    {/* Policy */}
                    <div className="classic-newsletter__policy">
                    By subscribing, you accept the <a href="#">Privacy Policy</a>
                    </div>
                    {/* End policy */}
                </div>
                {/* End right */}
                </div>
            </div>
            {/* End row */}
            </div>
            {/* End second container */}
        </div>
        {/* End container */}
        </div>
  )
}
