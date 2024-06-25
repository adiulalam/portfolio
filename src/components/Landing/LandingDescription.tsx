import { Box, Typography, useTheme } from "@mui/material";
import { useProfile } from "@/hooks";
// import Experiences from "../Experiences";

export const LandingDescription = () => {
  const theme = useTheme();
  const { description } = useProfile();

  return (
    <Box
      id="portfolio"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(4),
        [theme.breakpoints.down("xs")]: {
          padding: theme.spacing(2),
        },
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Typography
        variant="h4"
        sx={{
          paddingBottom: theme.spacing(2),
        }}
      >
        PORTFOLIO
      </Typography>
      <Box
        sx={{
          padding: theme.spacing(1.5),
          display: "flex",
          color: "white",
          backgroundColor: "black",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Box>
      {/* <Experiences /> */}
    </Box>
  );
};
