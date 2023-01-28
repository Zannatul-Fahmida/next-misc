import Head from "next/head";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Learning</title>
        <meta name="description" content="Awesome learning" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
