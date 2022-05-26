import React from 'react'
import ProductListItem from './ProductListItem.client'

export default function ProductLists({products}) {

  return (
    <>
        {/* <!-- Top filter --> */}
        <div class="collection__top-filter clearfix">
        {/* <!-- Open Filter Button --> */}
        <div class="top-filter__button js-open-collection-filter"><i class="lnil lnil-control-panel"></i> Filter</div>
        {/* <!-- End Open Filter Button --> */}
        {/* <!-- Sort and view --> */}
        <div class="collection__sort-and-view d-flex align-items-center">
            {/* <!-- Sort by -->   */}
            <div class="products-sort-by products-sort-by--without-view d-flex align-items-center">
            <label for="sort-by">Sort by</label>
            <div class="products-sort-by__select">
                <i class="lnil lnil-chevron-down"></i>
                <select id="sort-by">
                <option>Popularity</option>
                <option>Featured</option>
                <option>Price</option>
                <option>Default</option>
                </select>
            </div>
            </div>
            {/* <!-- End sort by --> */}
        </div>
        {/* <!-- End sort and view --> */}
        </div>
        {/* <!-- End top filter --> */}
        {/* <!-- Open mobile filter --> */}
        <div class="open-mobile-top-filter js-open-mobile-filter">
        <i class="lnil lnil-control-panel"></i>
        <span>Show filters</span>
        </div>
        {/* <!-- End open mobile filter --> */}
        {/* <!-- Filter --> */}
        <div class="top-filter js-top-filter">
        {/* <!-- Close background --> */}
        <div class="top-filter__close-background js-close-filter"></div>
        {/* <!-- End close background --> */}
        {/* <!-- Background --> */}
        <div class="top-filter__background">
            {/* <!-- Close --> */}
            <div class="top-filter__close">
            <a href="#" class="js-close-filter"><i class="lnil lnil-close"></i></a>
            </div>
            {/* <!-- End close ---> */}
            {/* <!-- Row --> */}
            <div class="row">
            {/* <!-- Widget --> */}
            <div class="col-12 col-md-6 col-lg-25">
                <div class="top-filter__widget">
                {/* <!-- Title --> */}
                <h2 class="widget__title">Category</h2>
                {/* <!-- End title --> */}
                {/* <!-- Collections --> */}
                <ul class="widget__collections">
                    <li><a href="#">Coats</a></li>
                    <li><a href="#">Jackets</a></li>
                    <li><a href="#">Cardigans & Sweaters</a></li>
                    <li><a href="#">Blazers</a></li>
                    <li><a href="#">Swearshirts</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">T-Shirts</a></li>
                    <li><a href="#">Polos</a></li>
                    <li><a href="#">Jeans</a></li>
                    <li><a href="#">Underwear</a></li>
                </ul>
                {/* <!-- End collections --> */}
                </div>
            </div>
            {/* <!-- End widget --> */}
            {/* <!-- Widget --> */}
            <div class="col-12 col-md-6 col-lg-25">
                <div class="top-filter__widget">
                {/* <!-- Title --> */}
                <h2 class="widget__title">Materials</h2>
                {/* <!-- End title --> */}
                {/* <!-- Options --> */}
                <ul class="widget__checkbox-options">
                    {/* <!-- Material option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="materials" checked />
                        <span>Cotton</span>
                    </label>
                    </li>
                    {/* <!-- End material option --> */}
                    {/* <!-- Material option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="materials" />
                        <span>Down</span>
                    </label>
                    </li>
                    {/* <!-- End material option --> */}
                    {/* <!-- Material option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="materials" />
                        <span>Houndstooth</span>
                    </label>
                    </li>
                    {/* <!-- End material option --> */}
                    {/* <!-- Material option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="materials" />
                        <span>Leather</span>
                    </label>
                    </li>
                    {/* <!-- End material option --> */}
                    {/* <!-- Material option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="materials" />
                        <span>Nappa Leather</span>
                    </label>
                    </li>
                    {/* <!-- End material option --> */}
                    {/* <!-- Material option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="materials" />
                        <span>Suede</span>
                    </label>
                    </li>
                    {/* <!-- End material option --> */}
                    {/* <!-- Material option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="materials" />
                        <span>Wool</span>
                    </label>
                    </li>
                    {/* <!-- End material option --> */}
                </ul>
                {/* <!-- End options --> */}
                </div>
            </div>
            {/* <!-- End Widget --> */}
            {/* <!-- Widget --> */}
            <div class="col-12 col-md-6 col-lg-25">
                <div class="top-filter__widget">
                {/* <!-- Title --> */}
                <h2 class="widget__title">Colors</h2>
                {/* <!-- End title --> */}
                {/* <!-- Options --> */}
                <ul class="widget__checkbox-options">
                    {/* <!-- Color option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="colors" checked />
                        <span>Black</span>
                    </label>
                    </li>
                    {/* <!-- End color option --> */}
                    {/* <!-- Color option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="colors" />
                        <span>White</span>
                    </label>
                    </li>
                    {/* <!-- End color option --> */}
                    {/* <!-- Color option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="colors" />
                        <span>Red</span>
                    </label>
                    </li>
                    {/* <!-- End color option --> */}
                    {/* <!-- Color option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="colors" />
                        <span>Orange</span>
                    </label>
                    </li>
                    {/* <!-- End color option --> */}
                    {/* <!-- Color option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="colors" />
                        <span>Green</span>
                    </label>
                    </li>
                    {/* <!-- End color option --> */}
                    {/* <!-- Color option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="colors" />
                        <span>Pink</span>
                    </label>
                    </li>
                    {/* <!-- End color option --> */}
                    {/* <!-- Color option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="colors" />
                        <span>Brown</span>
                    </label>
                    </li>
                    {/* <!-- End color option --> */}
                    {/* <!-- Color option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="colors" />
                        <span>Grey</span>
                    </label>
                    </li>
                    {/* <!-- End color option --> */}
                    {/* <!-- Color option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="colors" />
                        <span>Beige</span>
                    </label>
                    </li>
                    {/* <!-- End color option --> */}
                </ul>
                {/* <!-- End options --> */}
                </div>
            </div>
            {/* <!-- End widget --> */}
            {/* <!-- Widget --> */}
            <div class="col-12 col-md-6 col-lg-25">
                <div class="top-filter__widget">
                {/* <!-- Title --> */}
                <h2 class="widget__title">Size</h2>
                {/* <!-- End title --> */}
                {/* <!-- Options --> */}
                <ul class="widget__checkbox-options">
                    {/* <!-- Size option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="size" checked />
                        <span>XS</span>
                    </label>
                    </li>
                    {/* <!-- End size option --> */}
                    {/* <!-- Size option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="size" />
                        <span>S</span>
                    </label>
                    </li>
                    {/* <!-- End size option --> */}
                    {/* <!-- Size option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="size" />
                        <span>M</span>
                    </label>
                    </li>
                    {/* <!-- End size option --> */}
                    {/* <!-- Size option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="size" />
                        <span>L</span>
                    </label>
                    </li>
                    {/* <!-- End size option --> */}
                    {/* <!-- Size option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="size" />
                        <span>XL</span>
                    </label>
                    </li>
                    {/* <!-- End size option --> */}
                    {/* <!-- Size option --> */}
                    <li>
                    <label>
                        <input type="checkbox" name="size" />
                        <span>XXL</span>
                    </label>
                    </li>
                    {/* <!-- End size option --> */}
                </ul>
                {/* <!-- End options --> */}
                </div>
            </div>
            {/* <!-- End widget --> */}
            {/* <!-- Price --> */}
            <div class="col-12 col-md-6 col-lg-25">
                {/* <!-- Widget --> */}
                <div class="top-filter__widget">
                {/* <!-- Widget title --> */}
                <h2 class="widget__title">Price</h2>
                {/* <!-- End widget title --> */}
                {/* <!-- Price slider --> */}
                <div class="widget__price-slider">
                    <div class="js-price-slider"></div>
                    <div class="price-slider__value">
                    <span>From</span>
                    <input type="text" class="js-price-slider-value" />
                    </div>
                </div>
                {/* <!-- End price slider --> */}
                {/* <!-- Button --> */}
                <div class="widget__view-result">
                    <a href="#" class="third-button">View Result (25)</a>
                </div>
                {/* <!-- End button --> */}
                </div>
                {/* <!-- End widget --> */}
            </div>
            {/* <!-- End price --> */}
            </div>
            {/* <!-- End row --> */}
        </div>
        {/* <!-- End background --> */}
        </div>
        {/* <!-- End filter --> */}
        {/* <!-- Products row --> */}
        <div class="row products-row products-row--type-2">
            {products.map(pdk => <ProductListItem product={pdk}/> )}
        </div>
        {/* <!-- End Products row --> */}
        {/* <!-- Loading spin --> */}
        
        {/* <!-- End loading spin --> */}
        
    </>
  )
}
