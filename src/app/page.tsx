import Articles from "@/Components/Articles";
import CreativeAgency from "@/Components/CreativeAgency";
import CreativeSolutions from "@/Components/CreativeSolutions";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ImageSlider from "@/Components/ImageSlider";
import Metrics from "@/Components/Metrics";
import Sponsors from "@/Components/Sponsors";
import Subscribe from "@/Components/Subscribe";
import Testimonial from "@/Components/Testimonial";
import WhoWeAre from "@/Components/WhoWeAre";
import ScrollToTop from "@/Components/ScrollToTop";
import ChatWithUs from "@/Components/ChatWithUs";

export default function Home() {
  return (
    <div className="bg-[#E0E4E9] max-w-[100vw] w-full min-h-screen">
      <Header />
      <CreativeAgency />
      <Metrics />
      <CreativeSolutions />
      <ImageSlider />
      <Subscribe />
      <Testimonial />
      <WhoWeAre />
      <Sponsors />

      <Articles />
      <Footer />
      <ScrollToTop />
      <ChatWithUs />
    </div>
  );
}
