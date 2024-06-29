import { useProfile } from "@/hooks";
import { AdminProjects, AdminTabs } from ".";
import { ProjectProvider } from "@/provider";
import { AdminImagesTabs } from ".";
import { Box } from "@mui/material";

export const AdminProjectsTabs = () => {
  const { projects } = useProfile();

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
  };

  const deleteCallback = (id: string) => {
    console.log("deleteCallback", id);
  };

  return (
    <AdminTabs
      tabLists={tabLists}
      addCallback={addCallback}
      deleteCallback={deleteCallback}
    />
  );
};
