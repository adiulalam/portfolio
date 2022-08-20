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

const Media = (objectValue) => {
    const arrayValue = objectValue.objectValue

  return (
    <Tabs forceRenderTabPanel>
      <div class="flex flex-col items-center">
        <TabList>
          {arrayValue.map((value, index) => (
            <Tab tabIndex={index}>
              <div>
                {value["type"]}
                <ButtonDeleteTab
                //   handleDeleteTab={handleDeleteTab}
                  index={index}
                  id={value["media_uuid"]}
                />
              </div>
            </Tab>
          ))}
          {/* <ButtonAddTab handleAddTab={handleAddTab} /> */}
        </TabList>
      </div>

      {/* {textValue.map((arrayValue, arrayindex) => (
        <TabPanel>
          <div class="flex justify-center">
            <form class="w-full max-w-2xl">
              {errorMessage && (
                <ErrorMessage error="Error!" message="Field is Empty" />
              )}
              {Object.entries(arrayValue).map(([key, objectValue]) => {
                // Gives me all Array
                return key === "media" ? <Media objectValue={objectValue} /> : Array.isArray(objectValue) ? (
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
              })}
              <ButtonSubmit
                id={arrayValue["project_uuid"]}
                handleSubmit={handleSubmit}
                index={arrayindex}
              />
            </form>
          </div>
        </TabPanel>
      ))} */}
    </Tabs>
  );
};

export default Media;
