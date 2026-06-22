import Navbar from "@/components/layout/Navbar";
import HeroBanner from "@/components/home/HeroBanner";
import Categories from "@/components/home/Categories";
import FeaturedStores from "@/components/home/FeaturedStores";
import TrendingNow from "@/components/home/TrendingNow";
import OfferBanners from "@/components/home/OfferBanners";
import BestSellers from "@/components/home/BestSellers";
import WhyShop from "@/components/home/WhyShop";
import CustomerReviews from "@/components/home/CustomerReviews";
import Newsletter from "@/components/layout/Newsletter";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Categories />
      <FeaturedStores />
      <TrendingNow />
      <OfferBanners />
      <BestSellers />
      <WhyShop />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </>
  );
}