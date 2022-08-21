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
  const arrayValue = objectValue.objectValue;

  const [tabIndex, setTabIndex] = useState(-1);

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index, tabIndex) =>
        index === tabIndex ? setTabIndex(-1) : setTabIndex(index)
      }
    >
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

      {arrayValue.map((objValue, objIndex) => (
        <TabPanel>
          <div class="flex justify-center border-b-2 mb-4">
            <form class="w-full max-w-2xl">
              {/* {errorMessage && (
                <ErrorMessage error="Error!" message="Field is Empty" />
              )} */}
              {Object.entries(objValue).map(([key, value]) => {
                // Gives me all Array
                return (
                  <Input
                    name={key}
                    value={value}
                    textValue={objValue}
                    id="media_uuid"
                    // onTextChange={onTextChange}
                    // handleReset={handleReset}
                    // handleDelete={handleDelete}
                    index={objIndex}
                  />
                );
              })}
              <ButtonSubmit
                id={arrayValue["media_uuid"]}
                // handleSubmit={handleSubmit}
                index={objIndex}
              />
            </form>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Media;
