import {
    Link,
    flattenConnection
} from '@shopify/hydrogen/client'
import React from 'react'

export default function HeaderNav({data}) {
    const collections = flattenConnection(data.collections);
    const tags = flattenConnection(data.productTags);
    const productTypes = flattenConnection(data.productTypes);

  return (
    <ul className="header__nav">
        <li key={1}><Link to="/shop" className="nav__item">Shop</Link></li>
        <li key={2}>
            <Link
                to="/shop" className="nav__item">Browse
            </Link>
            {/* MegaMenu */}
            <div className="nav__mega-menu">
            {/* Column */}
            <div className="mega-menu__standard-column">
                {/* Column title */}
                <div className="standard-column__title">Category</div>
                {/* End column title */}
                {/* Column nav */}
                <ul className="standard-column__nav">
                    {productTypes.map((v,i) => {
                        return(
                            <li key={i}><Link to={`/category/${v}`}>{v}</Link></li>
                        )
                    })}
                </ul>
                {/* End column nav */}
            </div>
            {/* End column */}
            {/* Column */}
            <div className="mega-menu__standard-column">
                {/* Column title */}
                <div className="standard-column__title">Collections</div>
                {/* End column title */}
                {/* Column nav */}
                <ul className="standard-column__nav">
                    {collections.map((v,i) => {
                        return(
                            <li key={i}><Link to={`/collections/${v.handle}`}>{v.title}</Link></li>
                        )
                    })}
                </ul>
                {/* End column nav */}
            </div>
            {/* End column */}
            {/* Column */}
            <div className="mega-menu__standard-column">
                {/* Column title */}
                <div className="standard-column__title">Tags</div>
                {/* End column title */}
                {/* Column nav */}
                <ul className="standard-column__nav">
                    {tags.map((v,i) => {
                        return(
                            <li key={i}><Link to={`/tags/${v}`}>{v}</Link></li>
                        )
                    })}
                
                </ul>
                {/* End column nav */}
            </div>
            {/* End column */}
            </div>
            {/* End MegaMenu */}
        </li>
                    
        <li key={3}>
            <a href="blog.html" className="nav__item">Blog</a>
            {/* Dropdown menu */}
            <ul className="nav__dropdown-menu">
            <li><a href="blog.html">Blog full width</a></li>
            <li><a href="blog-with-sidebar.html">Blog with sidebar</a></li>
            <li><a href="post.html">Blog post</a></li>
            </ul>
            {/* End dropdown menu */}
        </li>
        <li key={4}><a href="about.html" className="nav__item">About</a></li>
        <li key={5}><a href="contact.html" className="nav__item">Contact</a></li>
    </ul>
  )
}
