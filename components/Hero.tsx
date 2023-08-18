import { url } from "inspector";
import Image from "next/image";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   return (
      <div className="min-h-[1000px] max-xl:min-h-[700px] max-md:min-h-[500px] max-sm:min-h-[300px] relative mt-24 flex justify-center">
         <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-[url('/images/samarkand-city.webp')] bg-cover bg-center bg-no-repeat"></div>
         <div className="max-w-[550px] max-md:max-w-sm w-full mt-40 px-5 text-white">
            <h2 className="poppins text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg">
               It is better to see once than to hear a thousand times
            </h2>
         </div>
      </div>
   );
};

export default Hero;
