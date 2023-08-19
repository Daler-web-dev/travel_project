import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Videos from "@/components/Videos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <>
         <section className="">
            <Hero />
         </section>
         <section id="tours" className="pb-16 bg-[#f8f7f1]">
            <Services />
         </section>
         <section className="">
            <Reviews />
         </section>
         <section>
            <Videos />
         </section>
      </>
   );
}
