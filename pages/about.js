import Head from "next/head";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About learning</title>
        <meta name="description" content="self learning web development" />
      </Head>
      <h1 className="content">Content</h1>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
