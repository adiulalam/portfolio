import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { portfolioContext } from "../../App";
import ContentObjects from "../../connection/connection";
import { mutationHeaders } from "../admin";
import { ButtonSubmit } from "../components/button";
import Input from "../components/input";
import { ErrorMessage } from "../components/message";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";
import { reset } from "react-tabs/lib/helpers/uuid";

const Projects = () => {
  const headers = useContext(mutationHeaders);

  const { projects } = useContext(portfolioContext);

  const [resetValue, setResetValue] = useState(_.cloneDeep(projects));
  const [textValue, setTextValue] = useState(projects);
  const [submitValue, setSubmitValue] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  const handleReset = (e, arrayindex, index) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === "details" || name === "technologies") {
      const resetArr = _.cloneDeep([...textValue]);
      resetArr[arrayindex][name][index] = [...resetValue][arrayindex][name][
        index
      ];

      setTextValue(resetArr);

      // setSubmitValue((prevState) => {
      //   if (_.isEqual([...loop], resetValue[name])) {
      //     delete prevState[name];
      //     return {
      //       ...prevState,
      //     };
      //   } else {
      //     return {
      //       ...prevState,
      //       [name]: newLoop,
      //     };
      //   }
      // });
    } else {
      const resetArr = [...textValue];
      resetArr[arrayindex][name] = [...resetValue][arrayindex][name];

      // console.log(resetArr)

      setTextValue(resetArr);

      setSubmitValue((prevState) => {
        delete prevState[name]
        return {
          ...prevState,
        };
      });
    }
  };

  const handleSubmit = async (e) => {
    console.clear();
    e.preventDefault();

    console.log("submitValue", submitValue);

    // let isEmpty = false;
    // Object.entries(submitValue).map(([key, value]) => {
    //   if (!value.length) isEmpty = true;
    // });
    // if (_.isEmpty(submitValue)) isEmpty = true;

    // if (isEmpty) {
    //   setErrorMessage(true);
    //   // console.log("IS EMPTY");
    // } else {
    //   // console.log("NOT EMPTY");
    //   setErrorMessage(false);

    //   const shortaboutme_uuid = e.target.id;
    //   const variables = { updateAboutme: submitValue };
    //   const mutation = `mutation updateAboutMe($updateAboutme: portfolio_shortaboutme_set_input = {}) { update_portfolio_shortaboutme(where: {shortaboutme_uuid: {_eq: "${shortaboutme_uuid}"}}, _set: $updateAboutme) { affected_rows } }`;

    //   const graphqlQuery = {
    //     operationName: "updateAboutMe",
    //     query: mutation,
    //     variables: variables,
    //   };

    //   (async function fetchData() {
    //     await ContentObjects(headers, graphqlQuery);
    //     window.location.reload();
    //   })();
    // }
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

      // setSubmitValue(newArr[arrayindex][name]);
    }
  };

  return (
    <Tabs forceRenderTabPanel>
      <TabList>
        {textValue.map((value, index) =>
          index === textValue.length - 1 ? (
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="white"
                viewBox="0 0 22 22"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          ) : (
            <Tab tabIndex={index}>{value["title"]}</Tab>
          )
        )}
      </TabList>

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
                        // handleDelete={handleDelete}
                        // handleAdd={handleAdd}
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
                    // handleDelete={handleDelete}
                    index={arrayindex}
                  />
                );
              })}
              <ButtonSubmit
                id={textValue["project_uuid"]}
                handleSubmit={handleSubmit}
              />
            </form>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Projects;
