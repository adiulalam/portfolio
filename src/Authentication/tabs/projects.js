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

const Projects = () => {
  const headers = useContext(mutationHeaders);

  const { projects } = useContext(portfolioContext);

  const [resetValue, setResetValue] = useState(projects);
  const [textValue, setTextValue] = useState(projects);
  const [submitValue, setSubmitValue] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  const onTextChange = (e, arrayindex, index) => {
    const { name, value } = e.target;
    if (name === "details" || name === "technologies") {
      const newArr = [...textValue];
      newArr[arrayindex][name][index] = value;

      setTextValue(newArr);
      
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
                        // handleReset={handleReset}
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
                    onTextChange={(e) => onTextChange(e, arrayindex)}
                    // handleReset={handleReset}
                    // handleDelete={handleDelete}
                  />
                );
              })}
              {/* <ButtonSubmit id={textValue['project_uuid']} handleSubmit={handleSubmit} /> */}
            </form>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Projects;
