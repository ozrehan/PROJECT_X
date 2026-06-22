import Navbar from "@/components/layout/Navbar";
import HeroBanner from "@/components/home/HeroBanner";
import Categories from "@/components/home/Categories";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Categories />
    </>
  );
}