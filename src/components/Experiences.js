import React, { Fragment, useContext } from "react";
import { Divider } from "@material-ui/core/";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Project from "./Project";
import { portfolioContext } from "../App";

const Experiences = () => {
  const { projects } = useContext(portfolioContext);

  return (
    <Timeline>
      {projects
        ? projects.map((project, index) => {
            return (
              <Fragment key={index}>
                <TimelineEvent
                  title={ new Date(project.projectdate).getFullYear()}
                  titleStyle={{ color: "rgb(168, 92, 47)", fontSize: "1.2em" }}
                  bubbleStyle={{ border: "solid 2px rgb(201, 163, 143)" }}
                  contentStyle={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                >
                  <Project project={project} />
                  <Divider />
                </TimelineEvent>
              </Fragment>
            );
          })
        : []}
    </Timeline>
  );
};

export default Experiences;
