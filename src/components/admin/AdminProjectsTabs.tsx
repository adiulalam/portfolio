import { useProfile, useSnackbar } from "@/hooks";
import { AdminProjects } from ".";
import { CustomTab } from "../ui";
import { ProjectProvider } from "@/provider";
import { AdminImagesTabs } from ".";
import { Box } from "@mui/material";
import { api } from "@/utils/api";
import dayjs from "dayjs";

export const AdminProjectsTabs = () => {
  const { id, projects } = useProfile();
  const { setConfig } = useSnackbar();

  const {
    profile: { getProfile },
  } = api.useUtils();

  const { mutate: insertMutate } = api.project.insertProject.useMutation({
    onSuccess: async () => {
      await getProfile.invalidate();
      setConfig({
        isOpen: true,
        message: "Inserted successfully",
        severity: "success",
      });
    },
    onError: () =>
      setConfig({
        isOpen: true,
        message: "Could not Insert",
        severity: "error",
      }),
  });

  const { mutate: deleteMutate } = api.project.deleteProject.useMutation({
    onSuccess: async () => {
      await getProfile.invalidate();
      setConfig({
        isOpen: true,
        message: "Deleted successfully",
        severity: "success",
      });
    },
    onError: () =>
      setConfig({
        isOpen: true,
        message: "Could not Delete",
        severity: "error",
      }),
  });

  const tabLists = projects!.map((project) => ({
    label: project.title,
    value: project.id,
    component: (
      <ProjectProvider project={project} key={project.id}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <AdminImagesTabs />
          <AdminProjects />
        </Box>
      </ProjectProvider>
    ),
  }));

  const addCallback = () => {
    console.log("addCallback");
    const body = {
      application: "Application URL",
      description: "Description",
      details: ["Detail 0"],
      profileId: id,
      projectDate: dayjs(new Date()).format("YYYY-MM-DD"),
      repo: "Repo URL",
      technologies: ["Tech 0"],
      title: "New Project",
    };

    insertMutate(body);
  };

  const deleteCallback = (id: string) => {
    console.log("deleteCallback", id);
    deleteMutate({ id });
  };

  return (
    <CustomTab
      tabLists={tabLists}
      addCallback={addCallback}
      deleteCallback={deleteCallback}
    />
  );
};
