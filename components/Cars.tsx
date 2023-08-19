import Image from "next/image";
import Link from "next/link";

interface CarsProps {}

const Cars: React.FC<CarsProps> = () => {
   const cars = [
      {
         id: 1,
         name: "EuroCamper",
         price: "$70 per night",
         img: "/images/cars/eurocamper.webp",
         link: "/tours/uzbekistan",
      },
      {
         id: 2,
         name: "Travel Trailer",
         price: "$70 per night",
         img: "/images/cars/travel-trailer.webp",
         link: "/tours/tadjikistan",
      },
      {
         id: 3,
         name: "Flying Cloud",
         price: "$70 per night",
         img: "/images/cars/flying-cloud.webp",
         link: "/tours/uzbekistan",
      },
   ];

   return (
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-20  max-xl:gap-10 max-lg:gap-5 max-sm:gap-y-10 px-20 max-lg:px-5 mt-28">
         {cars.map(
            (item: {
               id: number;
               name: string;
               price: string;
               img: string;
               link: string;
            }) => {
               return (
                  <Link href={item.link} key={item.id} className="">
                     <div className="">
                        <Image
                           src={item.img}
                           width={1000}
                           height={1000}
                           alt="car"
                        />
                     </div>
                     <div className="mt-5 max-lg:mt-3">
                        <p className="text-3xl max-xl:text-2xl">{item.name}</p>
                        <p className="text-lg text-[#757575]">{item.price}</p>
                     </div>
                  </Link>
               );
            }
         )}
      </div>
   );
};

export default Cars;
