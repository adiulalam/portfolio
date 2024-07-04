import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { Divider, Typography } from "@mui/material";
import { useProfile } from "@/hooks";
import { ProjectProvider } from "@/provider";
import { ProjectContainer } from ".";

export const ProjectTimeline = () => {
  const { projects } = useProfile();

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {projects?.map((project) => (
        <TimelineItem key={project.id}>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                padding: "12px",
                border: "solid 2px rgb(201, 163, 143)",
                margin: "1rem 0",
              }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                color: "rgb(168, 92, 47)",
                fontSize: "0.8rem",
                marginTop: "1rem",
              }}
            >
              {new Date(project.projectDate).getFullYear()}
            </Typography>

            <ProjectProvider project={project}>
              <ProjectContainer />
            </ProjectProvider>

            <Divider />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
