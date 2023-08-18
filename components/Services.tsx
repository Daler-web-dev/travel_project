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
                  <p className="mb-2">15-22 May</p>
                  <p className="mb-2">Tour to Uzbekistan</p>
                  <ul className="mb-2">
                     <Link href={"#"}>
                        <li className="text-sm">-Tashkent</li>
                     </Link>
                     <Link href={"#"}>
                        <li className="text-sm">-Samarkand</li>
                     </Link>
                     <Link href={"#"}>
                        <li className="text-sm">-Bukhara</li>
                     </Link>
                     <Link href={"#"}>
                        <li className="text-sm">-Khiva</li>
                     </Link>
                  </ul>
                  <p className="mb-2">All inclusive from $600</p>
                  <div className="max-sm:flex justify-center">
                     <Link href={'/uzbekistan'}>
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
                     src={"/images/samarkand.webp"}
                     width={1000}
                     height={1000}
                     alt="samarkand"
                  />
               </div>
               <div className="p-5">
                  <p className="mb-2">15-22 May</p>
                  <p className="mb-2">Tour to Uzbekistan</p>
                  <ul className="mb-2">
                     <Link href={"#"}>
                        <li className="text-sm">-Tashkent</li>
                     </Link>
                     <Link href={"#"}>
                        <li className="text-sm">-Samarkand</li>
                     </Link>
                     <Link href={"#"}>
                        <li className="text-sm">-Bukhara</li>
                     </Link>
                     <Link href={"#"}>
                        <li className="text-sm">-Khiva</li>
                     </Link>
                  </ul>
                  <p className="mb-2">All inclusive from $600</p>
                  <div className="max-sm:flex justify-center">
                     <button className="w-36 h-10 bg-[#277c52] text-white">
                        Read More
                     </button>
                  </div>
               </div>
            </div>
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
                  <p className="mb-2">15-22 May</p>
                  <p className="mb-2">Tour to Uzbekistan</p>
                  <ul className="mb-2">
                     <Link href={"#"}>
                        <li className="text-sm">-Tashkent</li>
                     </Link>
                     <Link href={"#"}>
                        <li className="text-sm">-Samarkand</li>
                     </Link>
                     <Link href={"#"}>
                        <li className="text-sm">-Bukhara</li>
                     </Link>
                     <Link href={"#"}>
                        <li className="text-sm">-Khiva</li>
                     </Link>
                  </ul>
                  <p className="mb-2">All inclusive from $600</p>
                  <div className="max-sm:flex justify-center">
                     <button className="w-36 h-10 bg-[#277c52] text-white">
                        Read More
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
