import { Typography, useTheme, useMediaQuery, Box } from "@mui/material";
import { useProfile } from "@/hooks";
import { LandingAboutMe, LandingInfo } from ".";
// import Portfolio from "./Portfolio";

export const LandingHome = () => {
  const theme = useTheme();
  const { backgroundImage, fullName } = useProfile();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const drawerSize = 300;
  const inLandScapeMode = useMediaQuery(
    `(orientation: landscape) and (max-width: ${drawerSize + 900}px)`
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      id="home"
    >
      <Box
        sx={{
          padding: theme.spacing(2),
          paddingTop: theme.spacing(10),
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            margin: theme.spacing(2),
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              color: "white",
              textShadow: "1px 1px 1px rgb(0, 0, 0)",
              marginBottom: theme.spacing(1),
            }}
          >
            I&apos;m {fullName},
          </Typography>
          <LandingAboutMe />
        </Box>
      </Box>
      <Box
        sx={[
          isSmallScreen || inLandScapeMode
            ? {
                padding: theme.spacing(4),
                display: "flex",
                justifyContent: "center",
                backgroundColor: theme.palette.grey[500],
              }
            : {
                position: "absolute",
                bottom: theme.spacing(4),
                right: theme.spacing(4),
              },
        ]}
      >
        <LandingInfo />
      </Box>
      {/* <Portfolio /> */}
    </Box>
  );
};
