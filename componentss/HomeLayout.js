import Collections from "./Collections";
import FeauturedProducts from "./FeauturedProducts";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MenuBar from "./MenuBar";
import NewProductsSection from "./NewProductsSection";
import Sale from "./Sale";
import Signup from "./Signup";
import SubSection from "./SubSection";

function HomeLayout() {
  return (
    <>
      <Header />
      <MenuBar />
      <HeroSection />
      <NewProductsSection />
      <SubSection />
      <FeauturedProducts />
      <Collections />
      <Sale />
      <Footer />
    </>
  );
}

export default HomeLayout;
