import React from 'react'

export default function HeaderMobileMenu({shop}) {
  return (
    <div className="header__mobile-menu">
        {/* Open mobile menu */}
        <div className="mobile-menu__open">
        <a href="#" className="js-open-mobile-menu"><i className="lnil lnil-menu" /></a>
        </div>
        {/* End open mobile menu */}
        {/* Mobile menu */}
        <div className="mobile-menu js-mobile-menu">
        {/* Overlay */}
        <div className="mobile-menu__overlay js-close-mobile-menu" />
        {/* End overlay */}
        {/* Content */}
        <div className="mobile-menu__content">
            {/* Close mobile menu */}
            <div className="mobile-menu__close">
            <a href="#" className="js-close-mobile-menu"><i className="lnil lnil-close" /></a>
            </div>
            {/* End close mobile menu */}
            {/* Mobile logo */}
            <h3 className="mobile-menu__logo">{shop.name || 'unnamed shop'}</h3>
            {/* End mobile logo */}
            {/* Mobile Nav */}
            <ul className="mobile-menu__nav">
            <li className="mobile-menu__dropdown">
                <a href="index.html">Home</a>
                <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                <li><a href="index.html">Home Page 1</a></li>
                <li><a href="index-2.html">Home Page 2</a></li>
                <li><a href="index-3.html">Home Page 3</a></li>
                <li><a href="index-4.html">Home Page 4</a></li>
                <li><a href="index-5.html">Home Page 5</a></li>
                <li><a href="index-6.html">Home Page 6</a></li>
                <li><a href="index-7.html">Home Page 7</a></li>
                <li><a href="index-8.html">Home Page 8</a></li>
                <li><a href="index-9.html">Home Page 9</a></li>
                <li><a href="index-10.html">Home Page 10</a></li>
                </ul>
                <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn"><span className="lnil lnil-chevron-down" /></div>
            </li>
            <li><a href="about.html">About</a></li>
            <li className="mobile-menu__dropdown">
                <a href="shop.html">Shop</a>
                <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                <li><a href="shop.html">Shop Page </a></li>
                <li><a href="product.html">Shop Details</a></li>
                <li><a href="cart.html">Cart Page</a></li>
                </ul>
                <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn"><span className="lnil lnil-chevron-down" /></div>
            </li>
            <li className="mobile-menu__dropdown">
                <a href="404.html">Pages</a>
                <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                <li><a href="404.html">404 Page </a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="coming-soon.html">Coming Soon</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="wishlist.html">Wishlist</a></li>
                </ul>
                <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn"><span className="lnil lnil-chevron-down" /></div>
            </li>
            <li className="dropdown">
                <a href="blog.html">News</a>
                <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                <li><a href="blog.html">Blog 1</a></li>
                <li><a href="blog-with-sidebar.html">Blog 2</a></li>
                <li><a href="post.html">Blog Single</a></li>
                </ul>
                <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn"><span className="lnil lnil-chevron-down" /></div>
            </li>
            </ul>
            {/* End Mobile nav */}
        </div>
        {/* End content */}
        </div>
        {/* End mobile menu */}
    </div>
  )
}
