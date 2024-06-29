import type { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import { signOut } from "next-auth/react";
import { Box, Button } from "@mui/material";
import { AdminIntro, AdminProjectsTabs } from "@/components/admin";
import { api } from "@/utils/api";
import { CustomTab, Loading, SnackbarToast } from "@/components/ui";
import { ProfileProvider, SnackbarProvider } from "@/provider";

const Admin = () => {
  const { data, isLoading, isError, error } = api.profile.getProfile.useQuery();

  const tabLists = [
    { label: "Intro", value: "0", component: <AdminIntro /> },
    { label: "Projects", value: "1", component: <AdminProjectsTabs /> },
  ];

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error("Error", error);
    return <Loading />;
  }

  return (
    <SnackbarProvider>
      <SnackbarToast />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 2,
          backgroundColor: "black",
          minHeight: "100vh",
        }}
      >
        <Button
          sx={{ marginLeft: "auto", marginRight: 0 }}
          variant="contained"
          onClick={() => void signOut({ callbackUrl: "/" })}
        >
          Sign out
        </Button>
        <ProfileProvider profile={data}>
          <CustomTab tabLists={tabLists} />
        </ProfileProvider>
      </Box>
    </SnackbarProvider>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const userSession = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    if (!userSession) {
      const callbackUrl = "?callbackUrl=/admin";
      return {
        redirect: {
          destination: `/api/auth/signin/auth0${callbackUrl}`,
          permanent: false,
        },
      };
    }

    return { props: { userSession } };
  } catch (error) {
    console.error(error);
    return { redirect: { destination: "/", permanent: false } };
  }
}

export default Admin;
