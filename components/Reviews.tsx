"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = () => {
   return (
      <div className="">
         <div className="">
            <div className="bg-[#f8f7f1]">
               <div className="container m-auto py-20">
                  <h2 className="text-4xl text-center">
                     Find Your Next Road Trip
                  </h2>
               </div>
            </div>
            <div className="py-60 relative z-[-11] overflow-hidden">
               <div className="w-screen h-screen fixed top-0 left-0 z-[-10] bg-[url('https://static.wixstatic.com/media/b6d151_74bc5122b2884b5287f0671b01730e6d~mv2.jpg/v1/fill/w_1750,h_1260,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b6d151_74bc5122b2884b5287f0671b01730e6d~mv2.jpg')] bg-cover bg-center bg-no-repeat"></div>
            </div>
            <div className="bg-[#f8f7f1]">
               <div className="flex max-lg:flex-col gap-10 py-40 px-20 max-lg:px-0 pb-16">
                  <div className="w-1/2 max-2xl:w-1/3 max-lg:w-full flex justify-center items-center px-5">
                     <h3 className="text-4xl max-md:text-3xl max-lg:text-center">
                        What People Say <br className="max-lg:hidden" /> About Us
                     </h3>
                  </div>
                  <div className="w-1/2 max-2xl:w-[75%] max-xl:w-3/5 max-lg:w-full">
                     <Swiper
                        className="max-w-[700px] w-full"
                        rewind={true}
                        autoplay={{
                           delay: 8000,
                           disableOnInteraction: false,
                        }}
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true, dynamicBullets: true }}
                        scrollbar={{ draggable: true }}
                     >
                        <SwiperSlide className="px-20 max-lg:px-10 pb-10">
                           <div className="">
                              <p className="text-xl max-lg:text-lg max-md:text-sm">
                                 If you want to go somewhere far from Europe,
                                 but not too far. Uzbekistan is 5.5 - 6 hours
                                 away. You can see everything independently,
                                 without a guide.
                              </p>
                           </div>
                           <div className="mt-5 max-md:mt-1">
                              <p className="text-lg font-medium max-lg:text-base">Dave</p>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className="px-20 max-lg:px-10 pb-10">
                           <div className="">
                              <p className="text-xl max-lg:text-lg">
                                 If you want to go somewhere far from Europe,
                                 but not too far. Uzbekistan is 5.5 - 6 hours
                                 away. You can see everything independently,
                                 without a guide.
                              </p>
                           </div>
                           <div className="mt-5 max-md:mt-1">
                              <p className="text-lg max-lg:text-base font-medium">Dave</p>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Reviews;
