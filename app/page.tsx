


import Approach from "@/components/Approach";
import Experience from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";


export default function Home() {  
  return (
    <section className = "w-full ">
     

    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px_5 overflow-clip">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach/>
        <Footer/>
        
        
      </div>
    </main>
    </section>
    
  );
}
 