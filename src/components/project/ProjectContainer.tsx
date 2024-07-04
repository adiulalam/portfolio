import { Box, Grid } from "@mui/material";
import { ProjectImages, ProjectInfo } from ".";

export const ProjectContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        paddingBottom: 2,
      }}
    >
      <Grid container>
        <ProjectInfo />
        <ProjectImages />
      </Grid>
    </Box>
  );
};
