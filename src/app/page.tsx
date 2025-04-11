import CreativeAgency from "@/Components/CreativeAgency";
import CreativeSolutions from "@/Components/CreativeSolutions";
import Header from "@/Components/Header";
import Metrics from "@/Components/Metrics";
import Subscribe from "@/Components/Subscribe";
import WhoWeAre from "@/Components/WhoWeAre";

export default function Home() {
  return (
    <div className="bg-[#E0E4E9] max-w-[100vw] w-full min-h-screen">
      <Header />
      <CreativeAgency />
      <Metrics />
      <CreativeSolutions />
      <Subscribe />
      <WhoWeAre />
    </div>
  );
}
