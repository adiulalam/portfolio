import { useProject } from "@/hooks";
import {
  Typography,
  Button,
  Grid,
  Box,
  useTheme,
  List,
  ListItem,
} from "@mui/material";

const Tag = ({ value }: { value: string }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: "black",
        background: "white",
        border: "solid 2px rgb(201, 163, 143)",
        padding: theme.spacing(0.5, 1),
        margin: theme.spacing(1),
        marginLeft: theme.spacing(0),
      }}
    >
      <Typography fontSize="0.7rem">{value}</Typography>
    </Box>
  );
};

export const ProjectInfo = () => {
  const theme = useTheme();
  const project = useProject();

  const buttonStyle = {
    borderRadius: 3,
    color: "white",
    background: "black",
    margin: theme.spacing(1),
    "&:hover": {
      color: "inherit",
      background: "rgb(201, 163, 143)",
    },
  };

  return (
    <Grid item xs={12} lg={8}>
      <div>
        <Typography
          sx={{
            paddingBottom: theme.spacing(1),
            fontWeight: 600,
          }}
          variant="h4"
        >
          {project.title}
        </Typography>
        <Typography variant="body1">
          <strong>{project.description}</strong>
        </Typography>
        <Box
          sx={{
            padding: theme.spacing(2, 5),
            [theme.breakpoints.down("xs")]: {
              padding: theme.spacing(0),
            },
          }}
        >
          <List sx={{ listStyleType: "disc" }} dense>
            {project.details.map((detail, i) => (
              <ListItem sx={{ display: "list-item", paddingY: 0 }} key={i}>
                <Typography variant="body1">{detail}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <div>
          <Typography variant="caption">TECHNOLOGIES</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              margin: theme.spacing(0, 1),
            }}
          >
            {project.technologies.map((tech, i) => (
              <Tag key={i} value={tech} />
            ))}
          </Box>
        </div>
        <div>
          {project.repo && (
            <Button
              sx={buttonStyle}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </Button>
          )}
          {project.application && (
            <Button
              sx={buttonStyle}
              href={project.application}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Application
            </Button>
          )}
        </div>
      </div>
    </Grid>
  );
};
