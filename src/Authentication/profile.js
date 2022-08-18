import React from "react";
import Intro from "./tabs/intro";
import AboutMe from "./tabs/aboutme";
import Projects from "./tabs/projects";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabs/react-tabs.css";

const Profile = () => {
  return (
    <Tabs defaultIndex={2}>
      <div class="flex flex-col items-center">
      <TabList>
        <Tab>Intro</Tab>
        <Tab>AboutMe</Tab>
        <Tab>Projects</Tab>
      </TabList>
      </div>

      <TabPanel>
        <Intro />
      </TabPanel>

      <TabPanel>
        <AboutMe />
      </TabPanel>

      <TabPanel>
        <Projects />
      </TabPanel>

    </Tabs>
  );
};

export default Profile;
