import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname === "/projects/weather-app" ? false : true;
  return (
    <Fragment>
      {showHeader && <Header />}
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
