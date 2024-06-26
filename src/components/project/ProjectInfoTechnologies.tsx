import { useProject } from "@/hooks";
import { Typography, Box, useTheme } from "@mui/material";

export const ProjectInfoTechnologies = () => {
  const theme = useTheme();
  const { technologies } = useProject();

  return (
    <Box>
      <Typography variant="caption">TECHNOLOGIES</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: theme.spacing(0, 1),
        }}
      >
        {technologies.map((tech, i) => (
          <Box
            key={i}
            sx={{
              color: "black",
              background: "white",
              border: "solid 2px rgb(201, 163, 143)",
              padding: theme.spacing(0.5, 1),
              margin: theme.spacing(1),
              marginLeft: theme.spacing(0),
            }}
          >
            <Typography fontSize="0.7rem">{tech}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
