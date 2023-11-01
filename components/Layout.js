import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-[100px] py-[30px] px-[30px] sm:py-[60px] sm:px-[80px] md:py-[80px] md:px-[100px] bg-white">
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
