import { useDeleteProject, useInsertProject, useProfile } from "@/hooks";
import { AdminProjects } from ".";
import { CustomTab } from "../ui";
import { ProjectProvider } from "@/provider";
import { AdminImagesTabs } from ".";
import { Box } from "@mui/material";

export const AdminProjectsTabs = () => {
  const { projects } = useProfile();

  const { onInsert } = useInsertProject();
  const { onDelete } = useDeleteProject();

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

  return (
    <CustomTab
      tabLists={tabLists}
      addCallback={onInsert}
      deleteCallback={onDelete}
    />
  );
};
