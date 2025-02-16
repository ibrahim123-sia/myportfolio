import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentPorject from "@/components/RecentPorject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import Clients from "@/components/ui/Cleint";

// import Approach from "@/components/Approach";
import Footer from "@/components/ui/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentPorject/>
      <Clients/>
      <Experience/>
      {/* <Approach/> */}
      <Footer/>
    </div>
   </main>
  );
}
