import Cars from "@/components/Cars";
import Reserve from "@/components/Reserve";
import Link from "next/link";

interface ToursProps {}

const Tours: React.FC<ToursProps> = () => {
   return (
      <>
         <section className="pt-24 relative">
            <div className="flex flex-col justify-center items-center py-28 px-20 max-lg:px-5 bg-[url('/images/road.webp')] bg-cover bg-bottom bg-no-repeat text-white">
               <div className="w-full h-full absolute top-0 left-0 bg-black/40"></div>
               <h2 className="text-[90px] text-7xl max-md:text-5xl max-sm:text-4xl font-bold dun tracking-wider text-center relative z-10">
                  Our RVs
               </h2>
               <div className="max-w-[600px] w-full">
                  <p className="text-xl max-md:text-lg max-sm:text-base font-medium text-center relative z-10">
                     Im a paragraph. Click here to add your own text and edit
                     me. Let your users get to know you.
                  </p>
               </div>
            </div>
         </section>
         <section>
            <Cars />
         </section>
         <section>
            <Reserve />
         </section>
         <section className="bg-[#f8f7f1] py-32">
            <div className="flex max-sm:flex-col justify-center items-center gap-5">
               <div className="flex items-center gap-5 max-sm:gap-2">
                  <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
                  <h2 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl tracking-wide">
                     Have Questions? Visit Our
                  </h2>
               </div>
               <div className="">
                  <Link href={"/blog"}>
                     <button className="px-10 py-3 rounded-full text-xl font-medium duration-150 ease-in text-white bg-[#277c52] hover:bg-[#1a422d]">
                        FAQ Page
                     </button>
                  </Link>
               </div>
            </div>
         </section>
      </>
   );
};

export default Tours;
