import { Link } from '@shopify/hydrogen/client'
import React from 'react'

export default function HeaderNav() {
  return (
    <ul className="header__nav">
        <li>
            <Link
                to="/shop" className="nav__item">Shop
            </Link>
            {/* MegaMenu */}
            <div className="nav__mega-menu">
            {/* Column */}
            <div className="mega-menu__standard-column">
                {/* Column title */}
                <div className="standard-column__title">Shop</div>
                {/* End column title */}
                {/* Column nav */}
                <ul className="standard-column__nav">
                <li><a href="shop.html">Grid 3 Column</a></li>
                <li><a href="shop-2.html">Grid 4 Column <span className="nav__item-tag nav__item-tag--default">default</span></a></li>
                <li><a href="shop-3.html">Listing</a></li>
                <li><a href="shop-4.html">Collection</a></li>
                <li><a href="shop-5.html">Metro</a></li>
                <li><a href="shop-6.html">Categories <span className="nav__item-tag nav__item-tag--hot">hot</span></a></li>
                <li><a href="shop-7.html">With Sidebar 1</a></li>
                <li><a href="shop-8.html">With Sidebar 2</a></li>
                <li><a href="shop-9.html">Instagram</a></li>
                <li><a href="shop-10.html">Vertical Menu</a></li>
                </ul>
                {/* End column nav */}
            </div>
            {/* End column */}
            {/* Column */}
            <div className="mega-menu__standard-column">
                {/* Column title */}
                <div className="standard-column__title">Product layouts</div>
                {/* End column title */}
                {/* Column nav */}
                <ul className="standard-column__nav">
                <li><a href="product.html">Default</a></li>
                <li><a href="product-layout-2.html">Sticky Info <span className="nav__item-tag nav__item-tag--hot">hot</span></a></li>
                <li><a href="product-layout-3.html">With Sidebar</a></li>
                <li><a href="product-layout-4.html">Color Background</a></li>
                <li><a href="product-layout-4.html">Vertical Menu</a></li>
                <li><a href="product-layout-4.html">Width 1170</a></li>
                <li><a href="product-layout-4.html">Sticky Info 2 <span className="nav__item-tag nav__item-tag--new">new</span></a></li>         
                <li><a href="product-layout-4.html">Sticky Info 3 <span className="nav__item-tag nav__item-tag--new">new</span></a></li>         
                <li><a href="product-layout-4.html">Grid Gallery (4 images) <span className="nav__item-tag nav__item-tag--new">new</span></a></li>         
                <li><a href="product-layout-4.html">Grid Gallery (5 images) <span className="nav__item-tag nav__item-tag--new">new</span></a></li>         
                <li><a href="product-layout-4.html">Sticky Tabs Accordion <span className="nav__item-tag nav__item-tag--new">new</span></a></li>         
                </ul>
                {/* End column nav */}
            </div>
            {/* End column */}
            {/* Column */}
            <div className="mega-menu__standard-column">
                {/* Column title */}
                <div className="standard-column__title">Product types</div>
                {/* End column title */}
                {/* Column nav */}
                <ul className="standard-column__nav">
                <li><a href="product-type-1.html">Simple</a></li>
                <li><a href="product-type-2.html">Various</a></li>
                <li><a href="product-type-3.html">Colors Swatches</a></li>
                <li><a href="product-type-4.html">Images Swatches</a></li>
                <li><a href="product-type-5.html">Groupped</a></li>
                <li><a href="product-type-6.html">Affiliate</a></li>
                <li><a href="product-type-7.html">Featured Video</a></li>
                <li><a href="product-type-8.html">Guarantee Safe Checkout</a></li>
                <li><a href="product-type-9.html">Countdown Timer</a></li>
                <li><a href="product-type-10.html">Pre-orders <span className="nav__item-tag nav__item-tag--hot">hot</span></a></li>
                <li><a href="product-type-1.html">On Sale</a></li>
                <li><a href="product-type-1.html">Out of Stock</a></li>
                <li><a href="product-type-10.html">With Button Paypal <span className="nav__item-tag nav__item-tag--hot">hot</span></a></li>
                <li><a href="product-type-1.html">Bundle</a></li>
                </ul>
                {/* End column nav */}
            </div>
            {/* End column */}
            </div>
            {/* End MegaMenu */}
        </li>
        <li>
            <a href="blog.html" className="nav__item">Brands</a>
            {/* Dropdown menu */}
            <ul className="nav__dropdown-menu">
            <li><a href="blog.html">Blog full width</a></li>
            <li><a href="blog-with-sidebar.html">Blog with sidebar</a></li>
            <li><a href="post.html">Blog post</a></li>
            </ul>
            {/* End dropdown menu */}
        </li>
        <li>
            <a href="blog.html" className="nav__item">Blog</a>
            {/* Dropdown menu */}
            <ul className="nav__dropdown-menu">
            <li><a href="blog.html">Blog full width</a></li>
            <li><a href="blog-with-sidebar.html">Blog with sidebar</a></li>
            <li><a href="post.html">Blog post</a></li>
            </ul>
            {/* End dropdown menu */}
        </li>
        <li><a href="about.html" className="nav__item">About</a></li>
        <li><a href="contact.html" className="nav__item">Contact</a></li>
    </ul>
  )
}
