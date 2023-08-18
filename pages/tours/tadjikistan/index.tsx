import Image from "next/image";
import React from "react";

function Index() {
   return (
      <div className="mt-24">
         <div className="py-20 px-5 relative overflow-hidden">
            <video
               className="absolute -top-[24%] left-0 -z-20 w-full max-2xl:hidden"
               autoPlay={true}
               muted={true}
               src="/tadjikistan/tadjikistan.mp4"
            ></video>
            <Image
               className="hidden max-2xl:block absolute -z-10"
               fill
               alt=""
               src={"/tadjikistan/tadjikistan2.webp"}
            ></Image>

            <div className="max-w-[1050px] w-full m-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 py-20 max-md:py-5 max-lg:gap-10">
               <div className="relative w-full h-full rounded-2xl bg-no-repeat bg-cover bg-center">
                  <Image
                     className="rounded-2xl"
                     src={"/tadjikistan/1.webp"}
                     width={1000}
                     height={1000}
                     alt=""
                  />
                  <div className="w-[90%] absolute top-4 left-1/2 -translate-x-1/2 py-4 rounded-2xl bg-[#22222250]">
                     <p className=" text-4xl font-medium text-center text-white">
                        Khujand
                     </p>
                  </div>
               </div>
               <div className="relative w-full h-full rounded-2xl bg-no-repeat bg-cover bg-center">
                  <Image
                     className="rounded-2xl"
                     src={"/tadjikistan/2.webp"}
                     width={1000}
                     height={1000}
                     alt=""
                  />
                  <div className="w-[90%] absolute top-4 left-1/2 -translate-x-1/2 py-4 rounded-2xl bg-[#22222250]">
                     <p className=" text-4xl font-medium text-center text-white">
                        Dushanbe
                     </p>
                  </div>
               </div>
               <div className="relative w-full h-full rounded-2xl bg-no-repeat bg-cover bg-center">
                  <Image
                     className="rounded-2xl"
                     src={"/tadjikistan/3.webp"}
                     width={1000}
                     height={1000}
                     alt=""
                  />
                  <div className="w-[90%] absolute top-4 left-1/2 -translate-x-1/2 py-4 rounded-2xl bg-[#22222250]">
                     <p className=" text-4xl font-medium text-center text-white">
                        Panjikent
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Index;
