import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Layout = {
   children: React.ReactNode;
};

const Layout = ({ children }: Layout) => {
   return (
      <>
         <Header />
         <main>{children}</main>
         <Footer />
      </>
   );
};

export default Layout;
