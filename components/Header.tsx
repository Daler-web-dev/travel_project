import { useState } from "react";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
   window?: () => Window;
   children: React.ReactElement;
}

function HideOnScroll(props: Props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
   });

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   );
}

const Header: React.FC<any> = (props: Props) => {
   const [hide, setHide] = useState<boolean>(false);
   const [state, setState] = useState(false);

   return (
      <>
         <header className="bg-white">
            <HideOnScroll {...props}>
               <AppBar style={{ background: "#fff" }}>
                  <Toolbar className="flex justify-between py-5 px-20 max-lg:px-5">
                     <div className="max-sm:w-full max-sm:flex max-sm:justify-between max-sm:items-center">
                        <div className="w-32">
                           <Link href={"/"}>
                              <h1 className="text-center text-lg font-semibold text-black">
                                 Central Asia Travel Agency
                              </h1>
                           </Link>
                        </div>
                        <div className="hidden max-sm:block">
                           {hide ? (
                              <button onClick={() => setHide(false)}>
                                 <IoCloseSharp size={25} color="#000" />
                              </button>
                           ) : (
                              <button onClick={() => setHide(true)}>
                                 <GiHamburgerMenu size={25} color="#000" />
                              </button>
                           )}
                        </div>
                     </div>
                     <div
                        className={`max-sm:w-full max-sm:absolute max-sm:z-[-1] ${
                           hide ? "max-sm:top-20" : "max-sm:-top-[200%]"
                        } max-sm:left-0 max-sm:pt-10 max-sm:pb-5 max-sm:duration-200 max-sm:ease-in max-sm:bg-white`}
                     >
                        <nav>
                           <ul className="flex max-sm:flex-col items-center font-semibold gap-10 max-md:gap-5 text-black ">
                              <Link href="/tours">
                                 <li className="cursor-pointer">Tours</li>
                              </Link>
                              <Link href={"#"}>
                                 <li>Agency</li>
                              </Link>
                              <Link href={"#"}>
                                 <li>Онлайн-запись</li>
                              </Link>
                           </ul>
                        </nav>
                     </div>
                  </Toolbar>
               </AppBar>
            </HideOnScroll>
         </header>
      </>
   );
};

export default Header;
