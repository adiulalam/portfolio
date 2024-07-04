import { createContext } from "react";
import type { ReactNode } from "react";
import type { Project } from "@/server/db/schema/project";
import type { Image } from "@/server/db/schema/image";

export type ProjectType = Project & { images?: Image[] };
type ProjectContextType = ProjectType | undefined;

export const ProjectContext = createContext<ProjectContextType>(undefined);

export const ProjectProvider = ({
  children,
  project,
}: {
  children: ReactNode;
  project: ProjectContextType;
}) => {
  return (
    <ProjectContext.Provider value={project}>
      {children}
    </ProjectContext.Provider>
  );
};
