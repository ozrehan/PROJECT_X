import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import TrendingProducts from "@/components/home/TrendingProducts";
import FeaturedStores from "@/components/home/FeaturedStores";
import FlashSale from "@/components/home/FlashSale";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import DownloadApp from "@/components/home/DownloadApp";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <TrendingProducts />
      <FeaturedStores />
      <FlashSale />
      <WhyChooseUs />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </>
  );
}