import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader =
    router.pathname.slice(0, 10) === "/projects/" ? false : true;
  return (
    <Fragment>
      {showHeader && <Header />}
      {children}
      {showHeader && <Footer />}
    </Fragment>
  );
};

export default Layout;
