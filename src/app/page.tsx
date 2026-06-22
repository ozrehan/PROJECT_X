import Navbar from "@/components/layout/Navbar";
import HeroBanner from "@/components/home/HeroBanner";
import Categories from "@/components/home/Categories";
import FeaturedStores from "@/components/home/FeaturedStores";
import TrendingNow from "@/components/home/TrendingNow";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Categories />
      <FeaturedStores />
      <TrendingNow />
    </>
  );
}