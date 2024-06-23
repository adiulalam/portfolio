import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AppCacheProvider {...pageProps}>
        <main className={GeistSans.className}>
          <Component {...pageProps} />
        </main>
      </AppCacheProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
