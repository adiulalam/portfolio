import Head from "next/head";

export const Custom404 = () => {
  return (
    <Head>
      <title>404 - Page Not Found</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export const getStaticProps = () => {
  return {
    redirect: {
      destination: "/",
    },
  };
};

export default Custom404;
