import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "@/utils/api";
import styles from "./index.module.css";
import { NavBar } from "@/components/navigation";
import { ProfileProvider } from "@/provider";

export default function Home() {
  const { data, isLoading, isError } = api.profile.getProfile.useQuery();

  if (isLoading) {
    return <div>loading..</div>;
  }

  if (isError) {
    return <div>loading..</div>;
  }

  return (
    <>
      <Head>
        <title>Portfolio - Adiul Alam Adil</title>
        <meta name="description" content="Generated by create-t3-app" />
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