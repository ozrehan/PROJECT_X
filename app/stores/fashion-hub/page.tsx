import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FashionHubStore from "@/components/store/FashionHubStore";

export default function FashionHubPage() {
  return (
    <>
      <Navbar />
      <FashionHubStore />
      <Footer />
    </>
  );
}
