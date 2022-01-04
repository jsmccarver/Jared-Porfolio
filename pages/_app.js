import "../styles/globals.css";
import Layout from "../Components/Layout";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  const tagManagerArgs = {
    gtmId: "GTM-298284660",
  };
  TagManager.initialize(tagManagerArgs);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
