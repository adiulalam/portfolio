import type { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import { signOut } from "next-auth/react";
import { Box, Button } from "@mui/material";
import { AdminTabs } from "@/components/admin";
import { useState } from "react";

const Admin = () => {
  const tabs = [
    { label: "Intro", value: "0", component: <div>hello</div> },
    { label: "Projects", value: "1", component: <div>world</div> },
  ];

  const [tablists, setTablists] = useState(tabs);

  const addCallback = () => {
    setTablists((prev) => [
      ...prev,
      {
        label: `New Tab ${prev.length + 1}`,
        value: prev.length.toString(),
        component: <div>new tab {prev.length + 1}</div>,
      },
    ]);
  };

  const deleteCallback = (id: string) => {
    const filteredTab = tablists.filter((tab) => tab.value !== id);
    setTablists([...filteredTab]);
  };

  return (
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
      <AdminTabs
        tabLists={tablists}
        addCallback={addCallback}
        deleteCallback={deleteCallback}
      />
    </Box>
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
