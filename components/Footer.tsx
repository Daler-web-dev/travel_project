import { useForm } from "react-hook-form"
import Link from "next/link";

import TextField from "@mui/material/TextField";

import { BsInstagram } from "react-icons/bs";

type Inputs = {
  name: string,
  surname: string,
  email:string,
  subject:string
}

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>()
    const onSubmit = (data:any) => console.log(data)


   return (
      <footer className="px-20 py-10 max-lg:px-5 bg-[#fff]">
         <div className="flex max-md:flex-col justify-between">
            <div className="sm:w-fit max-md:mb-10">
               <div className="mb-20 max-sm:mb-10">
                  <h3 className="text-center text-lg font-medium">
                     Central Asia Travel Agency
                  </h3>
               </div>
               <div className="flex gap-14">
                  <div className="">
                     <ul className="flex flex-col gap-2">
                        <li className="text-sm">52 Golomb Street, POB</li>
                        <li className="text-sm">305 Holon 5810201</li>
                        <li className="text-sm">CentralAsia@gmail.com</li>
                        <li className="text-sm">123-456-7890</li>
                     </ul>
                  </div>
                  <div className="max-sm:hidden">
                     <nav>
                        <ul>
                           <li>Tours</li>
                           <li>Agency</li>
                           <li className="font-medium">Онлайн-запись</li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div className="w-fit p-1 mt-16 max-sm:mt-10 rounded-full bg-black">
                  <Link href={"#"}>
                     <BsInstagram size={15} color="#FFF" />
                  </Link>
               </div>
            </div>
            <div className="">
               <div className="mb-10">
                  <h3 className="text-4xl">Contact Us</h3>
               </div>
               <div >
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                     <TextField label="First Name" variant="standard" />
                     <TextField label="Last Name" variant="standard"/>
                     <TextField label="Email" variant="standard" />
                     <TextField label="Subject" variant="standard" />
                  </div>
                  <div className="mt-5">
                     <TextField
                        style={{ width: "100%" }}
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        variant="standard"
                     />
                  </div>
                  <div className="mt-5">
                     <button type="submit" className="w-36 h-12 font-medium rounded-full bg-[#277c52] text-white">
                        Submit
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
