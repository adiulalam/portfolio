import { Grid } from "@mui/material";
import {
  ProjectInfoDetails,
  ProjectInfoLink,
  ProjectInfoLists,
  ProjectInfoTechnologies,
} from ".";

export const ProjectInfo = () => {
  return (
    <Grid item xs={12} lg={8}>
      <div>
        <ProjectInfoDetails />
        <ProjectInfoLists />
        <ProjectInfoTechnologies />
        <ProjectInfoLink />
      </div>
    </Grid>
  );
};
