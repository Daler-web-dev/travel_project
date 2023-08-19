import { useState } from "react";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { AiFillCloseCircle } from "react-icons/ai";

interface ReserveProps {}

const Reserve: React.FC<ReserveProps> = () => {
   const [hide, setHide] = useState(false);

   return (
      <>
         <div className="py-40 flex max-sm:flex-col items-center justify-center gap-5">
            <div className="">
               <h2 className="text-4xl max-lg:text-3xl tracking-wider">
                  Reserve Your Trip
               </h2>
            </div>
            <div className="">
               <button
                  onClick={() => setHide(true)}
                  className="px-10 py-3 rounded-full text-xl font-medium duration-150 ease-in text-white bg-[#277c52] hover:bg-[#1a422d]"
               >
                  Check Availability
               </button>
            </div>
         </div>

         <div
            className={`w-screen h-screen fixed top-0 left-0 bg-black/40 ${
               hide ? "block" : "hidden"
            }`}
         ></div>
         <div
            className={`w-full max-sm:h-screen fixed ${
               hide ? "top-0" : "-top-[110%]"
            } left-0 z-[2000] px-5 max-sm:pb-20 max-sm:overflow-auto duration-700 ease-in bg-[#277c52] text-white`}
         >
            <div className="max-w-[1000px] w-full m-auto py-10">
               <div className="flex items-center justify-between">
                  <div className="">
                     <h2 className="text-4xl max-md:text-3xl font-medium tracking-wider">
                        Check Availability
                     </h2>
                  </div>
                  <div className="">
                     <button onClick={() => setHide(false)}>
                        <AiFillCloseCircle size={25} color="white" />
                     </button>
                  </div>
               </div>

               <div className="flex max-md:flex-col mt-20 pb-10 border-white border-b-2">
                  <div className="w-[35%] max-md:w-full max-md:mb-5">
                     <h3 className="text-xl font-medium">Travel Details</h3>
                  </div>

                  <div className="w-[65%] max-md:w-full grid grid-cols-2 max-sm:grid-cols-1 gap-5 gap-y-10">
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Pick Up *</label>
                        <select className="py-3 px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white">
                           <option value=""></option>
                           <option>San Diego</option>
                           <option>Malibu Beach</option>
                           <option>Mission Bay</option>
                           <option>Napa Valley</option>
                        </select>
                     </div>
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Drop Off *</label>
                        <select className="py-3 px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white">
                           <option value=""></option>
                           <option>San Diego</option>
                           <option>Malibu Beach</option>
                           <option>Mission Bay</option>
                           <option>Napa Valley</option>
                        </select>
                     </div>
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Start Date *</label>
                        <input
                           type="date"
                           className="py-3 px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Start Date *</label>
                        <input
                           type="date"
                           className="py-3 px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">
                           Number of Passengers *
                        </label>
                        <input
                           type="number"
                           className="py-3 px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Drop Off *</label>
                        <select className="py-[14px] px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white">
                           <option value=""></option>
                           <option>EuroCamper</option>
                           <option>Vanagon</option>
                           <option>MotorHome</option>
                           <option>Ranger Van</option>
                           <option>Travel Trailer</option>
                           <option>Flying Cloud</option>
                        </select>
                     </div>
                  </div>
               </div>

               <div className="flex max-md:flex-col mt-10">
                  <div className="w-[35%] max-md:w-full max-md:mb-5">
                     <h3 className="text-lg font-medium">Personal Details</h3>
                  </div>
                  <div className="w-[65%] max-md:w-full grid grid-cols-2 max-sm:grid-cols-1 gap-5 gap-y-10">
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">First Name</label>
                        <input
                           type="text"
                           className="py-3 px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Last Name</label>
                        <input
                           type="text"
                           className="py-3 px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Phone</label>
                        <input
                           type="text"
                           className="py-3 px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Email *</label>
                        <input
                           type="text"
                           className="py-3 px-3 text-lg font-medium tracking-wider border-b-2 outline-none cursor-pointer hover:bg-black/40 bg-black/20 border-white text-white"
                        />
                     </div>
                  </div>
               </div>

               <div className="flex justify-end mt-7">
                  <button className="px-12 max-md:px-7 py-3 max-md:py-2 text-lg font-medium rounded-full text-black bg-white">
                     Submit
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Reserve;
