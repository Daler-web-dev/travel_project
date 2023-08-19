import { useState } from "react";

import MuiAccordionSummary, {
   AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

interface BlogProps {}

const Search = styled("div")(({ theme }) => ({
   position: "relative",
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: "100%",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "12ch",
         "&:focus": {
            width: "20ch",
         },
      },
   },
}));

const Accordion = styled((props: AccordionProps) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
   border: `1px solid ${theme.palette.divider}`,
   "&:not(:last-child)": {
      borderBottom: 0,
   },
   "&:before": {
      display: "none",
   },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
   <MuiAccordionSummary expandIcon={<IoIosArrowDown />} {...props} />
))(({ theme }) => ({
   backgroundColor:
      theme.palette.mode === "dark"
         ? "rgba(255, 255, 255, .05)"
         : "rgba(0, 0, 0, .03)",
   flexDirection: "row-reverse",
   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(180deg)",
   },
   "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
   },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(2),
   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Blog: React.FC<BlogProps> = () => {
   const [expanded, setExpanded] = useState<string | false>("panel1");

   const handleChange =
      (panel: string) =>
      (event: React.SyntheticEvent, newExpanded: boolean) => {
         setExpanded(newExpanded ? panel : false);
      };
   return (
      <>
         <section className="pt-24 relative">
            <div className="flex flex-col justify-center items-center py-28 px-20 max-lg:px-5 bg-[url('https://static.wixstatic.com/media/82fcd3_29ef9231bda74ba888019b20e8ca55ea~mv2.jpg/v1/fill/w_2164,h_377,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_29ef9231bda74ba888019b20e8ca55ea~mv2.jpg')] bg-cover bg-top bg-no-repeat text-white">
               <div className="w-full h-full absolute top-0 left-0 bg-black/40"></div>
               <h2 className="text-7xl max-md:text-5xl max-sm:text-4xl font-bold dun tracking-wider text-center relative z-10">
                  FAQ
               </h2>
               <div className="max-w-[600px] w-full">
                  <p className="text-lg max-md:text-base font-medium text-center relative z-10">
                     Im a paragraph. Click here to add your own text and edit
                     me. Let your users get to know you.
                  </p>
               </div>
            </div>
         </section>
         <section>
            <div className="max-w-[1200px] w-full m-auto mt-20 px-5">
               <div className="flex max-sm:flex-col justify-between items-center">
                  <div className="max-sm:mb-5">
                     <p>Часто задаваемые вопросы</p>
                  </div>
                  <Search className="border-gray-300 border-2 bg-transparent">
                     <SearchIconWrapper>
                        <BiSearch />
                     </SearchIconWrapper>
                     <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                     />
                  </Search>
               </div>
               <div className="mt-10">
                  <Accordion
                     expanded={expanded === "panel1"}
                     onChange={handleChange("panel1")}
                     sx={{
                        border: "none",
                        padding: "10px 0",
                     }}
                  >
                     <AccordionSummary
                        sx={{ backgroundColor: "#fff", border: "none" }}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                     >
                        <Typography>
                           Как отредактировать или удалить заголовок раздела
                           FAQ?
                        </Typography>
                     </AccordionSummary>
                     <AccordionDetails
                        sx={{
                           border: "none",
                           paddingLeft: "40px",
                        }}
                     >
                        <Typography>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Suspendisse malesuada lacus ex, sit amet
                           blandit leo lobortis eget. Lorem ipsum dolor sit
                           amet, consectetur adipiscing elit. Suspendisse
                           malesuada lacus ex, sit amet blandit leo lobortis
                           eget.
                        </Typography>
                     </AccordionDetails>
                  </Accordion>
                  <Accordion
                     expanded={expanded === "panel2"}
                     onChange={handleChange("panel2")}
                     sx={{
                        border: "none",
                        padding: "10px 0",
                        borderTop: "1px solid black",
                     }}
                  >
                     <AccordionSummary
                        sx={{ backgroundColor: "#fff", border: "none" }}
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                     >
                        <Typography>Как добавить вопросы и ответы?</Typography>
                     </AccordionSummary>
                     <AccordionDetails
                        sx={{
                           border: "none",
                           paddingLeft: "40px",
                        }}
                     >
                        <Typography>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Suspendisse malesuada lacus ex, sit amet
                           blandit leo lobortis eget. Lorem ipsum dolor sit
                           amet, consectetur adipiscing elit. Suspendisse
                           malesuada lacus ex, sit amet blandit leo lobortis
                           eget.
                        </Typography>
                     </AccordionDetails>
                  </Accordion>
                  <Accordion
                     sx={{
                        border: "none",
                        padding: "10px 0",
                        borderTop: "1px solid black",
                     }}
                     expanded={expanded === "panel3"}
                     onChange={handleChange("panel3")}
                  >
                     <AccordionSummary
                        sx={{ backgroundColor: "#fff", border: "none" }}
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                     >
                        <Typography>
                           Можно ли добавить в FAQ изображение, видео или гифку?
                        </Typography>
                     </AccordionSummary>
                     <AccordionDetails
                        sx={{
                           border: "none",
                           paddingLeft: "40px",
                        }}
                     >
                        <Typography>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Suspendisse malesuada lacus ex, sit amet
                           blandit leo lobortis eget. Lorem ipsum dolor sit
                           amet, consectetur adipiscing elit. Suspendisse
                           malesuada lacus ex, sit amet blandit leo lobortis
                           eget.
                        </Typography>
                     </AccordionDetails>
                  </Accordion>
               </div>
            </div>
         </section>
      </>
   );
};

export default Blog;
