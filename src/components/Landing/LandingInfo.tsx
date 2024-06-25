import { Typography, Button, Box, useTheme } from "@mui/material";
import {
  Email as EmailIcon,
  School as SchoolIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { useProfile } from "@/hooks";

export const LandingInfo = () => {
  const theme = useTheme();
  const { career, email, education, location, resume } = useProfile();

  const style = {
    title: {
      color: theme.palette.grey[300],
      textAlign: "center",
    },
    icon: {
      margin: theme.spacing(0.5, 1),
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        color: "white",
        padding: 2,
        gap: 1,
        backgroundColor: theme.palette.grey[900],
        [theme.breakpoints.up("sm")]: {
          width: 300,
          backgroundColor: "black",
        },
        borderRadius: 2,
      }}
    >
      <Typography sx={style.title}>{career}</Typography>

      <div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EmailIcon sx={style.icon} />
          <Typography variant="caption" sx={style.title}>
            {email}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SchoolIcon sx={style.icon} />
          <Typography variant="caption" sx={style.title}>
            {education}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon sx={style.icon} />
          <Typography variant="caption" sx={style.title}>
            {location}
          </Typography>
        </Box>
      </div>

      <Box
        sx={{
          margin: theme.spacing(1),
          alignSelf: "center",
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            background: "rgb(201, 163, 143)",
          },
          borderRadius: 2,
        }}
      >
        <Button style={{ color: "inherit" }} href={resume}>
          Resume
        </Button>
      </Box>
    </Box>
  );
};
