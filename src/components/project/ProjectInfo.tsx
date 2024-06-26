import { Grid } from "@mui/material";
import {
  ProjectInfoDetails,
  ProjectInfoLink,
  ProjectInfoLists,
  ProjectInfoTechnologies,
} from ".";
import { useProject } from "@/hooks";

export const ProjectInfo = () => {
  const { images } = useProject();

  const lg = images ? 8 : 12;

  return (
    <Grid item xs={12} lg={lg}>
      <div>
        <ProjectInfoDetails />
        <ProjectInfoLists />
        <ProjectInfoTechnologies />
        <ProjectInfoLink />
      </div>
    </Grid>
  );
};
