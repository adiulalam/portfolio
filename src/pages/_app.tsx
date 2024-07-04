import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "@/styles/globals.css";
import Head from "next/head";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={GeistSans.className}>
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Portoflio by Adiul Alam Adil" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
