import { useProject } from "@/hooks";
import { Typography, Box, useTheme, List, ListItem } from "@mui/material";

export const ProjectInfoLists = () => {
  const theme = useTheme();
  const { details } = useProject();

  return (
    <Box
      sx={{
        padding: theme.spacing(1, 5),
        [theme.breakpoints.down("xs")]: {
          padding: theme.spacing(0),
        },
      }}
    >
      <List sx={{ listStyleType: "disc" }} dense>
        {details.map((detail, i) => (
          <ListItem sx={{ display: "list-item", paddingY: 0 }} key={i}>
            <Typography variant="body1">{detail}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
