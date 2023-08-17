import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Link from "next/link";

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
   return (
      <>
         <header>
            <HideOnScroll {...props}>
               <AppBar style={{ background: "#fff" }}>
                  <Toolbar className="flex justify-between py-5">
                     <div className="w-32">
                        <Link href={"/"}>
                           <h1 className="text-center text-lg font-semibold text-black">
                              Central Asia Travel Agency
                           </h1>
                        </Link>
                     </div>
                     <div className="">
                        <nav>
                           <ul className="flex items-center font-semibold gap-10 text-black ">
                              <li>Tours</li>
                              <li>Agency</li>
                              <li>Онлайн-запись</li>
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
