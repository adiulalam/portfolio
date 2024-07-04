import { Box, useTheme, Typography } from "@mui/material";
import { useProfile } from "@/hooks";

export const NavMenuProfile = () => {
  const { fullName, career, profilePic } = useProfile();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="profile picture"
        height={100}
        width={100}
        style={{
          width: 110,
          height: 110,
          borderRadius: "50%",
        }}
        src={profilePic}
      />
      <Typography
        variant="h5"
        sx={{
          marginTop: theme.spacing(2),
          fontWeight: 700,
          lineHeight: "1em",
        }}
      >
        {fullName}
      </Typography>
      <Typography
        variant="button"
        sx={{
          color: theme.palette.grey[500],
        }}
      >
        {career}
      </Typography>
    </Box>
  );
};
