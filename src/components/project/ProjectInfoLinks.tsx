import { useProject } from "@/hooks";
import { Box, Button } from "@mui/material";

export const ProjectInfoLink = () => {
  const { repo, application } = useProject();

  const buttonStyle = {
    borderRadius: 3,
    color: "white",
    background: "black",
    margin: 1,
    "&:hover": {
      color: "inherit",
      background: "rgb(201, 163, 143)",
    },
  };

  return (
    <Box>
      {repo && (
        <Button
          sx={buttonStyle}
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </Button>
      )}
      {application && (
        <Button
          sx={buttonStyle}
          href={application}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Application
        </Button>
      )}
    </Box>
  );
};
