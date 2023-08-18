import Image from "next/image";
import Link from "next/link";

interface VideosProps {}

const Videos: React.FC<VideosProps> = () => {
   return (
      <div className="bg-white">
         <div className="flex max-md:flex-col justify-center items-end max-md:items-center gap-10 py-20 pb-16">
            <div className="w-32 h-32">
               <Image
                  src={"/images/instagram.webp"}
                  width={1000}
                  height={1000}
                  alt="instagram"
               />
            </div>
            <div className="">
               <h2 className="text-4xl max-md:text-3xl">
                  Follow Us on Instagram
               </h2>
               <Link
                  href={"#"}
                  className="underline text-4xlmax-md:text-3xl max-md:text-3xl"
               >
                  Central_asiatravelagency
               </Link>
            </div>
         </div>
         <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 max-md:gap-5 px-20 max-lg:px-5">
            <div className="w-full h-full relative z-10 py-10 flex justify-center bg-gray-700">
               {/* <div className=""></div> */}
               {/* <div className="w-full h-full absolute top-0 left-0 z-[-1]">
                 
               </div> */}
               <div className="w-64">
                  <p className="text-center text-xl text-white">
                     Haifa City #telaviv #haifa #israel #samarkand #uzbekistan🇺🇿
                     #tashkentcity #uzbeks #top #usa #ramatgan #tajikistan
                     #reels #video #photography #videoedits #masters
                  </p>
               </div>
            </div>
            <div className="w-full h-full relative z-10 py-10 flex justify-center bg-gray-700">
               {/* <div className=""></div> */}
               {/* <div className="w-full h-full absolute top-0 left-0 z-[-1]">
                 
               </div> */}
               <div className="w-64">
                  <p className="text-center text-xl text-white">
                     Haifa City #telaviv #haifa #israel #samarkand #uzbekistan🇺🇿
                     #tashkentcity #uzbeks #top #usa #ramatgan #tajikistan
                     #reels #video #photography #videoedits #masters
                  </p>
               </div>
            </div>
            <div className="w-full h-full relative z-10 py-10 flex justify-center bg-gray-700">
               {/* <div className=""></div> */}
               {/* <div className="w-full h-full absolute top-0 left-0 z-[-1]">
                 
               </div> */}
               <div className="w-64">
                  <p className="text-center text-xl text-white">
                     Haifa City #telaviv #haifa #israel #samarkand #uzbekistan🇺🇿
                     #tashkentcity #uzbeks #top #usa #ramatgan #tajikistan
                     #reels #video #photography #videoedits #masters
                  </p>
               </div>
            </div>
            <div className="w-full h-full relative z-10 py-10 flex justify-center bg-gray-700">
               {/* <div className=""></div> */}
               {/* <div className="w-full h-full absolute top-0 left-0 z-[-1]">
                 
               </div> */}
               <div className="w-64">
                  <p className="text-center text-xl text-white">
                     Haifa City #telaviv #haifa #israel #samarkand #uzbekistan🇺🇿
                     #tashkentcity #uzbeks #top #usa #ramatgan #tajikistan
                     #reels #video #photography #videoedits #masters
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Videos;
