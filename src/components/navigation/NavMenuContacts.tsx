import { useProfile } from "@/hooks";
import {
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";

export const NavMenuContacts = () => {
  const { linkedin, email, github } = useProfile();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        margin: theme.spacing(2),
        gap: 2,
      }}
    >
      <a href={`mailto: ${email}`} target="_blank" rel="noopener noreferrer">
        <EmailIcon />
      </a>

      <a
        href={`https://github.com/${github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>

      <a
        href={`https://www.linkedin.com/in/${linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
    </Box>
  );
};
