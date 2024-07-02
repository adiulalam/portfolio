import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    void router.replace("/");
  });

  return (
    <Head>
      <title>404 - Page Not Found</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Custom404;
