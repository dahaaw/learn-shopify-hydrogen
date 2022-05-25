import Banner from '../components/Banner.server';
import BlogLatest from '../components/BlogLatest.client';
import Brands from '../components/Brands.server';
import CollectionBanner from '../components/CollectionBanner.client';
import Intro from '../components/Intro.client';
import Layout from '../components/Layout.server';
import Newslater from '../components/Newslater.client';
import ProductFeatured from '../components/ProductFeatured.server';
import ProductSlider from '../components/ProductSlider.client';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Intro />
      <Brands />
      <ProductFeatured />
      <CollectionBanner />
      <ProductSlider />
      <BlogLatest />
      <Newslater />
    </Layout>
  );
}


