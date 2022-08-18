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
import "./react-tabs.css";

const Projects = () => {
  const headers = useContext(mutationHeaders);

  const { projects } = useContext(portfolioContext);

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

    if (name === "details" || name === "technologies") {
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
    } else {
      // setTextValue((prevState) => ({
      //   ...prevState,
      //   [name]: resetValue[name],
      // }));
      // setSubmitValue((prevState) => {
      //   delete prevState[name];
      //   return {
      //     ...prevState,
      //   };
      // });
    }
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
      ([key, value]) => !value.length && (isEmpty = true)
    );
    if (_.isEmpty(submitValue)) isEmpty = true;

    if (isEmpty) {
      setErrorMessage(true);
      // console.log("IS EMPTY");
    } else {
      // console.log("NOT EMPTY");
      setErrorMessage(false);

      const project_uuid = e.target.id;
      const variables = { updateProject: submitValue };

      const fetchData = async(graphqlQuery) => {
        // await ContentObjects(headers, graphqlQuery);
        window.location.reload();
      };

      if (
        project_uuid?.length &&
        _.has([...textValue][index], "project_uuid")
      ) {
        console.log("if");

        const mutation = `mutation updateProject($updateProject: portfolio_project_set_input = {}) { update_portfolio_project(where: {project_uuid: {_eq: "${project_uuid}"}}, _set: $updateProject) { affected_rows } }`;

        const graphqlQuery = {
          operationName: "updateProject",
          query: mutation,
          variables: variables,
        };

       await fetchData(graphqlQuery)

      } else {
        console.log("else");
        //todo- Write Add new Project GraphQL query
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
      title: `newProject`,
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
    setSubmitValue(newObject);
  };

  const handleDeleteTab = (e, index) => {
    e.preventDefault();
    const { id } = e.target;

    if (id?.length && _.has([...textValue][index], "project_uuid")) {
      console.log("id?.length && _.has([...textValue][index], 'project_uuid'");

      //todo- Write GraphQL query
    } else {
      // console.log(index)

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

      //todo- Write GraphQL query and for submitvalue
    }

    // setTextValue((prevState) => [...prevState, newObject]);
    // setResetValue((prevState) => [...prevState, newObject]);
    // setSubmitValue(newObject);

    // console.log(textValue)
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
              {Object.entries(arrayValue).map(([key, objectValue]) => {
                // Gives me all Array
                return Array.isArray(objectValue) ? (
                  objectValue.map((val, index) => {
                    // console.log(val),
                    return typeof val === "object" && val !== null ? null : (
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
                    );
                  })
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
              })}
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
