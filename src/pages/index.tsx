import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "@/utils/api";
import styles from "./index.module.css";
import { NavBar } from "@/components/navigation";
import { ProfileProvider } from "@/provider";
import { Loading } from "@/components/ui";

export default function Home() {
  const { data, isLoading, isError } = api.profile.getProfile.useQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error..</div>;
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
          <main className={styles.main}>
            <div className={styles.showcaseContainer}>
              <AuthShowcase />
            </div>
          </main>
        </NavBar>
      </ProfileProvider>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className={styles.authContainer}>
      <p className={styles.showcaseText}>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className={styles.loginButton}
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
