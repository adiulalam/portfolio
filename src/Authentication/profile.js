import React from "react";
import Intro from "./tabs/intro";
import AboutMe from "./tabs/aboutme";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabs/react-tabs.css";

const Profile = () => {
  return (
    <Tabs defaultIndex={1}>
      <TabList>
        <Tab>Intro</Tab>
        <Tab>AboutMe</Tab>
      </TabList>

      <TabPanel>
        <Intro />
      </TabPanel>

      <TabPanel>
        <AboutMe />
      </TabPanel>
    </Tabs>
  );
};

export default Profile;
