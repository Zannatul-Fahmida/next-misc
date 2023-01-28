import Head from "next/head";

const Blog = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>
    </>
  );
};

export default Blog;

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;
  
  console.log(`Connecting to database with ${user} and ${pass}`)

  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
}
