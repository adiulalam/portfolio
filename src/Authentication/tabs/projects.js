// import _ from "lodash";
import React, { useContext, useState } from "react";
import { portfolioContext } from "../../App";
import ContentObjects from "../../connection/connection";
import { mutationHeaders } from "../admin";
import { ButtonSubmit } from "../components/button";
import Input from "../components/input";
import { ErrorMessage } from "../components/message";

const Projects = () => {
  const headers = useContext(mutationHeaders);

  const { projects } = useContext(portfolioContext);

  const [resetValue, setResetValue] = useState(projects);
  const [textValue, setTextValue] = useState(projects);
  const [submitValue, setSubmitValue] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  console.log(projects)


  return (
    <>

    </>
    
  )
};

export default Projects;
