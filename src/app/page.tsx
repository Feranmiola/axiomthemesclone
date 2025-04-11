import CreativeAgency from "@/Components/CreativeAgency";
import CreativeSolutions from "@/Components/CreativeSolutions";
import Header from "@/Components/Header";
import Metrics from "@/Components/Metrics";

export default function Home() {
  return (
    <div className="bg-white max-w-[100vw] w-full min-h-screen">
      <Header />
      <CreativeAgency />
      <Metrics />
      <CreativeSolutions />
    </div>
  );
}
