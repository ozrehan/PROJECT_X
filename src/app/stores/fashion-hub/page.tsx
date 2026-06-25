import Navbar from "@/components/layout/Navbar";
import StoreBanner from "@/components/store/StoreBanner";
import StoreTabs from "@/components/store/StoreTabs";
import StoreAbout from "@/components/store/StoreAbout";
import StoreCategories from "@/components/store/StoreCategories";
import StoreLayout from "@/components/store/StoreLayout"; 

export default function StorePage() {
  return (
    <>
      <Navbar />
      <StoreBanner />
      <StoreTabs />
      <StoreAbout />
    <StoreCategories />
            <StoreLayout />
    </>
  );
}