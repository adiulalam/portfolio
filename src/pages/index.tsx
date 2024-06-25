import Head from "next/head";
import { api } from "@/utils/api";
import { NavBar } from "@/components/navigation";
import { ProfileProvider } from "@/provider";
import { Loading } from "@/components/ui";
import { LandingHome } from "@/components/Landing";

const Home = () => {
  const { data, isLoading, isError, error } = api.profile.getProfile.useQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error("Error", error);
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Portfolio - Adiul Alam Adil</title>
        <meta name="description" content="Portoflio by Adiul Alam Adil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfileProvider profile={data}>
        <NavBar>
          <LandingHome />
        </NavBar>
      </ProfileProvider>
    </>
  );
};

export default Home;
