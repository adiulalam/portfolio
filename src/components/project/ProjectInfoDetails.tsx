import { useProject } from "@/hooks";
import { Typography, useTheme } from "@mui/material";

export const ProjectInfoDetails = () => {
  const theme = useTheme();
  const { title, description } = useProject();

  return (
    <>
      <Typography
        sx={{
          paddingBottom: theme.spacing(1),
          fontWeight: 600,
        }}
        variant="h4"
      >
        {title}
      </Typography>
      <Typography variant="body1">
        <strong>{description}</strong>
      </Typography>
    </>
  );
};
