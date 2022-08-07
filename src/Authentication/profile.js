import React, { useContext, useEffect, useState } from "react";
import { portfolioContext } from "../App";
import Intro from "./tabs/intro";
import AboutMe from "./tabs/aboutme";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabs/react-tabs.css";

const Profile = () => {
  // const portfolioContent = useContext(portfolioContext);

  // const [textValue, setTextValue] = useState(portfolioContent);

  const [intro, setIntro] = useState();
  const [projects, setProjects] = useState();
  const [aboutMe, setAboutMe] = useState();

  // useEffect(() => {
  //   [textValue].map(
  //     ({ shortAboutMe, projects, ...rest }) => (
  //       setIntro(rest), setProjects(projects), setAboutMe(shortAboutMe)
  //     )
  //   );
  // }, [textValue]);

  // const onTextChange = (e, index) => {
  //   // console.log("e.target.index--->", index);

  //   const { name, value } = e.target;
  //   // console.log("e.target.name--->", { [name]: value });
  //   if (name === "loop") {
  //     const { loop } = textValue.shortAboutMe;
  //     const newLoop = [...loop];
  //     newLoop[index] = value;

  //     return setTextValue((prevState) => ({
  //       ...prevState,
  //       shortAboutMe: { ...prevState.shortAboutMe, loop: newLoop },
  //     }));
  //   } else if (name === "base") {
  //     return setTextValue((prevState) => ({
  //       ...prevState,
  //       shortAboutMe: { ...prevState.shortAboutMe, [name]: value },
  //     }));
  //   } else {
  //     return setTextValue((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   }
  // };

  // const handleSubmit = () => console.log(textValue);

  // const handleReset = (e) => {
  //   e.preventDefault();
  //   const { name } = e.target;
  //   setTextValue((prevState) => ({
  //     ...prevState,
  //     [name]: portfolioContent[name],
  //   }));
  //   // console.log(value);
  // };

  // const handleDelete = (e) => {
  //   e.preventDefault();
  // };

  //   const {shortAboutMe, projects, ...rest} = textValue;

  // console.log("..rewst--->", aboutMe)

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
        <AboutMe
        />
      </TabPanel>
    </Tabs>
  );
};

export default Profile;
