import { Link } from '@shopify/hydrogen/client'
import React from 'react'
import HeaderMobileMenu from './HeaderMobileMenu.client'
import HeaderNav from './HeaderNav.client'
import HeaderPromo from './HeaderPromo.client'


function Header({ shop }) {
    return (
        <header className="header header--type-6">
            <HeaderPromo />
            {/* Container */}
            <div className="container">
                {/* Header container */}
                <div className="header__container d-flex align-items-center">
                    <HeaderMobileMenu shop={shop} />

                    {/* Search form */}
                    <form className="header__search">
                        {/* Search input */}
                        <input type="text" className="header-search__input" placeholder="Search" />
                        {/* End search input */}
                        {/* Search button */}
                        <button type="submit" className="header-search__button"><i className="lnil lnil-search-alt" /></button>
                        {/* End search button */}
                    </form>
                    {/* End search form */}
                    {/* Logo */}
                    <h1 className="header__logo">
                        <Link 
                            to="/">
                            {shop.name || 'unnamed shop'}
                        </Link>
                    </h1>
                    {/* End logo */}
                    {/* Header right */}
                    <ul className="header__right">
                        <li><a href="account.html"><i className="lnil lnil-user" /></a></li>
                        <li className="header__cart d-none d-lg-block"><a href="#"><i className="lnil lnil-heart" /><span>2</span></a></li>
                        <li className="header__cart">
                            <a href="cart.html" className="js-open-canvas-cart"><i className="lnil lnil-cart" /><span>2</span></a>
                        </li>
                    </ul>
                    {/* End header right */}
                </div>
                {/* End header container */}

                <HeaderNav />
            </div>
            {/* End container */}
        </header>
    )
}

export default Header