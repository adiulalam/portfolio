import { useProfile } from "@/hooks";
import { AdminProjects, AdminTabs } from ".";
import { ProjectProvider } from "@/provider";

export const AdminProjectsTabs = () => {
  const { projects } = useProfile();

  const tabLists = projects!.map((project) => ({
    label: project.title,
    value: project.id,
    component: (
      <ProjectProvider project={project}>
        <AdminProjects />
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
