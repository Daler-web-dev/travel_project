import Image from "next/image";
import Link from "next/link";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
   return (
      <div className="m-auto pt-16 sm:px-5 bg-[#f8f7f1]">
         <div className="mb-10">
            <h2 className="text-6xl max-lg:text-5xl max-md:text-4xl font-bold text-center">
               Our Services
            </h2>
         </div>
         <div className="grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1 gap-10">
            <div className="flex max-sm:flex-col bg-[#edebeb]">
               <div className="w-1/2 max-lg:w-2/5 max-md:w-1/2 max-sm:w-full">
                  <Image
                     className="w-full h-full"
                     src={"/images/samarkand.webp"}
                     width={1000}
                     height={1000}
                     alt="samarkand"
                  />
               </div>
               <div className="p-5">
                  <p className="leading-3">15-22 May</p>
                  <p className="mb-2 text-lg">Tour to Uzbekistan</p>
                  <ul className="mb-2">
                     <Link href={"https://en.wikipedia.org/wiki/Tashkent"}>
                        <li className="text-sm leading-5 underline">
                           -Tashkent
                        </li>
                     </Link>
                     <Link href={"https://en.wikipedia.org/wiki/Samarkand"}>
                        <li className="text-sm leading-5 underline">
                           -Samarkand
                        </li>
                     </Link>
                     <Link href={"https://en.wikipedia.org/wiki/Bukhara"}>
                        <li className="text-sm leading-5 underline">
                           -Bukhara
                        </li>
                     </Link>
                     <Link href={"https://en.wikipedia.org/wiki/Khiva"}>
                        <li className="text-sm leading-5 underline">-Khiva</li>
                     </Link>
                  </ul>
                  <p className="mb-2">All inclusive from $600</p>
                  <div className="max-sm:flex justify-center">
                     <Link href={"/tours/uzbekistan"}>
                        <button className="w-36 h-10 bg-[#277c52] text-white">
                           Read More
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="flex max-sm:flex-col bg-[#edebeb]">
               <div className="w-1/2 max-lg:w-2/5 max-md:w-1/2 max-sm:w-full">
                  <Image
                     className="w-full h-full"
                     src={"/images/tadjikistan.webp"}
                     width={1000}
                     height={1000}
                     alt="samarkand"
                  />
               </div>
               <div className="p-5">
                  <p className="leading-3">June 7-11</p>
                  <p className="mb-2 text-lg">Tadjikistan</p>
                  <ul className="mb-2">
                     <Link
                        href={
                           "https://ru.wikipedia.org/wiki/%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5"
                        }
                     >
                        <li className="text-sm leading-5 underline">
                           -Dushanbe
                        </li>
                     </Link>
                     <Link href={"https://en.wikipedia.org/wiki/Khujand"}>
                        <li className="text-sm leading-5 underline">
                           -Khujand
                        </li>
                     </Link>
                     <Link href={"https://en.wikipedia.org/wiki/Panjakent"}>
                        <li className="text-sm leading-5 underline">
                           -Panjakent
                        </li>
                     </Link>
                  </ul>
                  <p className="mb-2">All inclusive from $550</p>
                  <div className="max-sm:flex justify-center">
                     <Link href={"/tours/tadjikistan"}>
                        <button className="w-36 h-10 bg-[#277c52] text-white">
                           Read More
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="flex max-sm:flex-col bg-[#edebeb]">
               <div className="w-1/2 max-lg:w-2/5 max-md:w-1/2 max-sm:w-full">
                  <Image
                     className="w-full h-full"
                     src={"/images/mountain.webp"}
                     width={1000}
                     height={1000}
                     alt="samarkand"
                  />
               </div>
               <div className="p-5">
                  <p className="leading-3">May 5-8</p>
                  <p className="mb-2 text-xl">Mountain Trip</p>
                  <ul className="mb-2">
                     <Link
                        href={
                           "https://en.wikipedia.org/wiki/Amirsoy_Mountain_Resort"
                        }
                     >
                        <li className="text-sm leading-5 underline">
                           -Amirsay
                        </li>
                     </Link>
                     <Link href={"https://en.wikipedia.org/wiki/Chorvoq"}>
                        <li className="text-sm leading-5 underline">
                           -Chorvok
                        </li>
                     </Link>
                     <Link
                        href={
                           "https://en.wikipedia.org/wiki/Zaamin_National_Park"
                        }
                     >
                        <li className="text-sm leading-5 underline">-Zomin</li>
                     </Link>
                  </ul>
                  <p className="mb-2">All inclusive from $1000</p>
                  <div className="max-sm:flex justify-center">
                     <Link href={"/tours/mountain-trip"}>
                        <button className="w-36 h-10 bg-[#277c52] text-white">
                           Read More
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
