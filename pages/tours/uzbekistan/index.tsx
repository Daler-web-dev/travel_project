import Image from "next/image";

interface UzbekistanProps {}

const Uzbekistan: React.FC<UzbekistanProps> = () => {
   const arr = [
      {
         id: 1,
         title: "1st and 2nd days Tashkent",
         dcr: "Hotel of Uzbekistan Tashkent City Special dinner",
      },
      {
         id: 2,
         title: "3rd and 4th days in Samarkand",
         dcr: "Registan Square Bibi KhonimGur Emir Shakhi Zinda Ulugbek observatory Jewish Cemetery  Siyab Bazar ",
      },
      {
         id: 3,
         title: "5th and 6th days in Bukhara ",
         dcr: "5th and 6th days in Bukhara Zarafshon Hotel Minorai Kalon Labi Hovuz Sitorayi Mohixosa Ark Bukhara Bazar ",
      },
      {
         id: 4,
         title: "7th day",
         dcr: "Giving Special gifts for each Tourists and Transfer to airport ",
      },
   ];

   return (
      <>
         <section className="mt-24">
            <div className="px-20 max-lg:px-5 bg-[url('/images/bukhara.webp')] bg-cover bg-bottom bg-no-repeat text-white">
               <div className="max-w-[700px] w-full flex flex-col gap-10  max-md:gap-5 py-10">
                  <h2 className="text-6xl max-md:text-4xl sm:text-center">
                     Uzbekistan
                  </h2>
                  <p className="text-xl max-md:text-lg font-medium">
                     Uzbekistan has been the center of civilization since
                     ancient times. This city, located in the center of the
                     Great Silk Road, has been sharing its secrets for humanity
                     until now. Are you ready to return to history with us? -
                     Welcome to history !
                  </p>
                  <ul className="flex flex-col gap-1 text-xl max-md:text-lg font-medium">
                     <li>✅ Transfer from Airport to Hotel </li>
                     <li>✅ Transfer from Airport to Hotel </li>
                     <li>✅ Transfer from Airport to Hotel </li>
                     <li>✅ Transfer from Airport to Hotel </li>
                     <li>✅ Transfer from Airport to Hotel </li>
                  </ul>
                  <p className="w-fit p-1 px-2 text-xl max-md:text-lg font-medium bg-white text-black">
                     ❌ Flight from Tel Aviv to Tashkent not included{" "}
                  </p>
               </div>
            </div>
         </section>
         <section className="mt-10 px-5 mb-10">
            <div className="max-w-[1000px] w-full m-auto grid grid-cols-2 max-md:grid-cols-1 gap-7 max-lg:gap-5">
               {arr.map((item: { id: number; title: string; dcr: string }) => {
                  return (
                     <div
                        key={item.id}
                        className="flex p-3 bg-gradient-to-r from-[#ea7b27] to-[#e4b184] text-white"
                     >
                        <div className="w-1/2 px-4 flex flex-col justify-around items-center">
                           <div className="">
                              <p className="text-sm font-medium text-center">
                                 {item.title}
                              </p>
                           </div>
                           <div className="">
                              <p className="text-base max-sm:text-sm font-medium">
                                 {item.dcr}
                              </p>
                           </div>
                           <button className="py-3 max-md:py-2 px-10 max-md:px-7 max-sm:text-sm border duration-200 ease-out border-1 hover:bg-white hover:text-black">
                              Подробнее
                           </button>
                        </div>
                        <div className="w-4/5">
                           <Image
                              src={"/images/tashkent_edited.webp"}
                              width={1000}
                              height={1000}
                              alt="photo"
                           />
                        </div>
                     </div>
                  );
               })}
            </div>
         </section>
      </>
   );
};

export default Uzbekistan;
