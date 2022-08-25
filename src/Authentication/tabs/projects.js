import _ from "lodash";
import React, { useContext, useState } from "react";
import { portfolioContext } from "../../App";
import ContentObjects from "../../connection/connection";
import { mutationHeaders } from "../admin";
import {
  ButtonAddTab,
  ButtonDeleteTab,
  ButtonSubmit,
} from "../components/button";
import Input from "../components/input";
import { ErrorMessage } from "../components/message";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Media from "./media";
import "./react-tabs.css";

const Projects = () => {
  const headers = useContext(mutationHeaders);
  const fetchData = async (graphqlQuery) => {
    await ContentObjects(headers, graphqlQuery);
    window.location.reload();
  };

  const { projects, content_uuid } = useContext(portfolioContext);

  const [resetValue, setResetValue] = useState(_.cloneDeep(projects));
  const [textValue, setTextValue] = useState(projects);
  const [submitValue, setSubmitValue] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  const handleAdd = (e, arrayindex, index) => {
    e.preventDefault();
    const { name } = e.target;

    setTextValue((prevState) => {
      const setArr = _.set([...prevState], `[${arrayindex}][${name}]`, [
        ...prevState[arrayindex][name],
        "",
      ]);
      return [...setArr];
    });

    setResetValue((prevState) => {
      const setArr = _.set([...prevState], `[${arrayindex}][${name}]`, [
        ...prevState[arrayindex][name],
        "",
      ]);
      return [...setArr];
    });

    setSubmitValue((prevState) => {
      const addArr = [...textValue];
      const newLoop = addArr[arrayindex][name];

      return {
        ...prevState,
        [name]: newLoop,
      };
    });
  };

  const handleDelete = (e, arrayindex, index) => {
    e.preventDefault();
    const { name } = e.target;

    setTextValue((prevState) => {
      const deleteArr = [...prevState];
      deleteArr[arrayindex][name].splice(index, 1);
      return deleteArr;
    });

    setResetValue((prevState) => {
      const deleteArr = [...prevState];
      deleteArr[arrayindex][name].splice(index, 1);
      return deleteArr;
    });

    setSubmitValue((prevState) => {
      const deleteArr = [...textValue];
      const newLoop = deleteArr[arrayindex][name];

      return {
        ...prevState,
        [name]: newLoop,
      };
    });
  };

  const handleReset = (e, arrayindex, index) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === "details" || name === "technologies") {
      const resetArr = [...textValue];
      resetArr[arrayindex][name][index] = [...resetValue][arrayindex][name][
        index
      ];

      setTextValue(resetArr);

      setSubmitValue((prevState) => {
        if (
          _.isEqual(
            [...textValue][arrayindex][name],
            [...resetValue][arrayindex][name]
          )
        ) {
          delete prevState[name];
          return {
            ...prevState,
          };
        } else {
          return {
            ...prevState,
            [name]: [...resetValue][arrayindex][name],
          };
        }
      });
    } else {
      const resetArr = [...textValue];
      resetArr[arrayindex][name] = [...resetValue][arrayindex][name];

      setTextValue(resetArr);

      setSubmitValue((prevState) => {
        delete prevState[name];
        return {
          ...prevState,
        };
      });
    }
  };

  const handleSubmit = async (e, index) => {
    console.clear();
    e.preventDefault();

    console.log("submitValue", submitValue);

    let isEmpty = false;
    Object.entries(submitValue).map(
      ([key, value]) =>
        !value.length &&
        !(
          key === "media" ||
          key === "repo" ||
          key === "application"
        ) &&
        (isEmpty = true)
    );
    if (_.isEmpty(submitValue)) isEmpty = true;

    

    if (isEmpty) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);

      const project_uuid = e.target.id;
      const variables = { projectObject: submitValue };

      if (
        project_uuid?.length &&
        _.has([...textValue][index], "project_uuid")
      ) {
        const mutation = `mutation updateProject($projectObject: portfolio_project_set_input = {}) { update_portfolio_project_by_pk(pk_columns: {project_uuid: "${project_uuid}"}, _set: $projectObject) { project_uuid } }`;

        const graphqlQuery = {
          operationName: "updateProject",
          query: mutation,
          variables: variables,
        };

        await fetchData(graphqlQuery);
      } else {
        const mutation = `mutation insertProject($projectObject: [portfolio_project_insert_input!] = {}) { insert_portfolio_project(objects: $projectObject) { affected_rows } }`;

        const graphqlQuery = {
          operationName: "insertProject",
          query: mutation,
          variables: variables,
        };

        await fetchData(graphqlQuery);
      }
    }
  };

  const onTextChange = (e, arrayindex, index) => {
    const { name, value } = e.target;

    if (name === "details" || name === "technologies") {
      const newArr = [...textValue];
      newArr[arrayindex][name][index] = value;

      setTextValue(newArr);

      setSubmitValue((prevState) => ({
        ...prevState,
        [name]: [newArr[arrayindex][name]],
      }));
    } else {
      let newArr = [...textValue];
      newArr[arrayindex][name] = value;

      setTextValue(newArr);

      setSubmitValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddTab = (e) => {
    e.preventDefault();

    const newObject = {
      // media: [{ type: "image/video", src: "", thumbnail: "" }],
      title: "newProject",
      description: "",
      projectdate: "",
      time: "",
      application: "",
      repo: "",
      details: [""],
      technologies: [""],
    };

    setTextValue((prevState) => [...prevState, newObject]);
    setResetValue((prevState) => [...prevState, newObject]);
    setSubmitValue({
      ...newObject,
      fk_content_uuid: content_uuid,
    });
  };

  const handleDeleteTab = async (e, index) => {
    e.preventDefault();
    const { id } = e.target;

    if (id?.length && _.has([...textValue][index], "project_uuid")) {
      const mutation = `mutation deleteProject { delete_portfolio_project_by_pk (project_uuid: "${id}") { project_uuid } }`;

      const graphqlQuery = {
        operationName: "deleteProject",
        query: mutation,
        variables: {},
      };

      await fetchData(graphqlQuery);
    } else {
      setTextValue((prevState) => {
        const deleteArr = [...prevState];
        deleteArr.splice(index, 1);
        return deleteArr;
      });

      setResetValue((prevState) => {
        const deleteArr = [...prevState];
        deleteArr.splice(index, 1);
        return deleteArr;
      });

      setSubmitValue({});
    }
  };

  const sortMediaObject = (arrayValue) =>
    arrayValue["media"]
      ? {
          media: arrayValue["media"],
          ...arrayValue,
        }
      : {
          ...arrayValue,
        };

  return (
    <Tabs forceRenderTabPanel>
      <div class="flex flex-col items-center">
        <TabList>
          {textValue.map((value, index) => (
            <Tab tabIndex={index}>
              <div>
                {value["title"]}
                <ButtonDeleteTab
                  handleDeleteTab={handleDeleteTab}
                  index={index}
                  id={value["project_uuid"]}
                />
              </div>
            </Tab>
          ))}
          <ButtonAddTab handleAddTab={handleAddTab} />
        </TabList>
      </div>

      {textValue.map((arrayValue, arrayindex) => (
        <TabPanel>
          <div class="flex justify-center">
            <form class="w-full max-w-2xl">
              {errorMessage && (
                <ErrorMessage error="Error!" message="Field is Empty" />
              )}
              {Object.entries(sortMediaObject(arrayValue)).map(
                ([key, objectValue]) => {
                  // Gives me all Array
                  return key === "media" ? (
                    <Media
                      objectValue={objectValue}
                      fk_uuid={textValue[arrayindex]["project_uuid"]}
                    />
                  ) : Array.isArray(objectValue) ? (
                    objectValue.map((val, index) => (
                      <Input
                        name={key}
                        value={val}
                        textValue={objectValue}
                        id="project_uuid"
                        onTextChange={(e) => onTextChange(e, arrayindex, index)}
                        handleReset={(e) => handleReset(e, arrayindex, index)}
                        handleDelete={(e) => handleDelete(e, arrayindex, index)}
                        handleAdd={(e) => handleAdd(e, arrayindex, index)}
                        index={index}
                      />
                    ))
                  ) : (
                    <Input
                      name={key}
                      value={objectValue}
                      textValue={arrayValue}
                      id="project_uuid"
                      onTextChange={onTextChange}
                      handleReset={handleReset}
                      handleDelete={handleDelete}
                      index={arrayindex}
                    />
                  );
                }
              )}
              <ButtonSubmit
                id={arrayValue["project_uuid"]}
                handleSubmit={handleSubmit}
                index={arrayindex}
              />
            </form>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Projects;


//todo joe's stuff
// const textValueFunction = ({e, index, textValue, setTextValue}) => {
//   if (textValue && setTextValue) {
//       let newTextValue = {};
//       if (!textValue || !typeof textValue === "object") {
//           return false;
//       } else if (Array.isArray(textValue)) {
//           // TODO - Do array shit
//           newTextValue = "blah"
//       } else {
//           // TODO - Do object shit
//           newTextValue = "blah blah"
//       }
//       setTextValue(newTextvalue)
//   }

//   if (submitValue && setSubmitValue) {
//       // TODO - do submit shit
//   }

//   if (resetValue && setResetValue) return false
// }