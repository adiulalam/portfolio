import {
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";

export const NavMenuContacts = () => {
  const theme = useTheme();

  const linkedin = "a";
  const email = "a";
  const github = "a";

  return (
    <Box
      sx={{
        display: "flex",
        margin: theme.spacing(2),
      }}
    >
      <a href={`mailto: ${email}`} target="_blank" rel="noopener noreferrer">
        <EmailIcon
          sx={{
            margin: theme.spacing(0, 1),
            color: "white",
          }}
        />
      </a>

      <a
        href={`https://github.com/${github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon
          sx={{
            margin: theme.spacing(0, 1),
            color: "white",
          }}
        />
      </a>

      <a
        href={`https://www.linkedin.com/in/${linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon
          sx={{
            margin: theme.spacing(0, 1),
            color: "white",
          }}
        />
      </a>
    </Box>
  );
};
