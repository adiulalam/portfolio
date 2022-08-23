import _ from "lodash";
import React, { useContext, useState } from "react";
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

const Media = ({ fk_uuid: fk_project_uuid, ...objectValue }) => {
  const headers = useContext(mutationHeaders);
  const fetchData = async (graphqlQuery) => {
    console.log(graphqlQuery);
    // await ContentObjects(headers, graphqlQuery);
    // window.location.reload();
  };

  const [tabIndex, setTabIndex] = useState(-1);
  const [resetValue, setResetValue] = useState(
    _.cloneDeep(objectValue.objectValue)
  );
  const [textValue, setTextValue] = useState(objectValue.objectValue);
  const [submitValue, setSubmitValue] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  const onTextChange = (e, index) => {
    const { name, value } = e.target;

    let newArr = [...textValue];
    newArr[index][name] = value;

    setTextValue(newArr);

    setSubmitValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = (e, index) => {
    e.preventDefault();
    const { name } = e.target;

    const resetArr = [...textValue];
    resetArr[index][name] = [...resetValue][index][name];

    setTextValue(resetArr);

    setSubmitValue((prevState) => {
      delete prevState[name];
      return {
        ...prevState,
      };
    });
  };

  const handleSubmit = async (e, index) => {
    console.clear();
    e.preventDefault();

    console.log("submitValue", submitValue);

    let isEmpty = false;
    Object.entries(submitValue).map(
      ([key, value]) =>
        !value.length &&
        !(key === "thumbnail" || key === "repo" || key === "application") &&
        (isEmpty = true)
    );
    if (_.isEmpty(submitValue)) isEmpty = true;

    if (isEmpty) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);

      const media_uuid = e.target.id;
      const variables = { mediaObject: submitValue };

      if (media_uuid?.length && _.has([...textValue][index], "media_uuid")) {
        const mutation = `mutation updateMedia($mediaObject: portfolio_media_set_input = {}) { update_portfolio_media_by_pk(pk_columns: {media_uuid: "${media_uuid}"}, _set: $mediaObject) { media_uuid } }`;

        const graphqlQuery = {
          operationName: "updateMedia",
          query: mutation,
          variables: variables,
        };

        await fetchData(graphqlQuery);
      } else {
        variables["mediaObject"] = {
          ...variables["mediaObject"],
          fk_project_uuid: fk_project_uuid,
        };

        const mutation = `mutation insertMedia($mediaObject: [portfolio_media_insert_input!] = {}) { insert_portfolio_media(objects: $mediaObject) { affected_rows } }`;

        const graphqlQuery = {
          operationName: "insertMedia",
          query: mutation,
          variables: variables,
        };

        await fetchData(graphqlQuery);
      }
    }
  };

  const handleAddTab = (e) => {
    e.preventDefault();

    const newObject = { type: "image/video", src: "", thumbnail: "" };

    setTextValue((prevState) => [...prevState, newObject]);
    setResetValue((prevState) => [...prevState, newObject]);
    setSubmitValue(_.omit(newObject, ["media"]));
  };

  const handleDeleteTab = async (e, index) => {
    e.preventDefault();
    const { id } = e.target;

    if (id?.length && _.has([...textValue][index], "media_uuid")) {
      const mutation = `mutation deleteMedia { delete_portfolio_media_by_pk (media_uuid: "${id}") { media_uuid } }`;

      const graphqlQuery = {
        operationName: "deleteMedia",
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

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index, tabIndex) =>
        index === tabIndex ? setTabIndex(-1) : setTabIndex(index)
      }
    >
      <div class="flex flex-col items-center">
        <TabList>
          {textValue.map((value, index) => (
            <Tab tabIndex={index}>
              <div>
                {value["type"]}
                <ButtonDeleteTab
                  handleDeleteTab={handleDeleteTab}
                  index={index}
                  id={value["media_uuid"]}
                />
              </div>
            </Tab>
          ))}
          <ButtonAddTab handleAddTab={handleAddTab} />
        </TabList>
      </div>

      {textValue.map((arrayValue, arrayIndex) => (
        <TabPanel>
          <div class="flex justify-center border-b-2 mb-4">
            <form class="w-full max-w-2xl">
              {errorMessage && (
                <ErrorMessage error="Error!" message="Field is Empty" />
              )}
              {Object.entries(arrayValue).map(([key, value]) => {
                return (
                  (key !== "thumbnail" || arrayValue["type"] !== "image") && (
                    <Input
                      name={key}
                      value={value}
                      textValue={arrayValue}
                      id="media_uuid"
                      onTextChange={onTextChange}
                      handleReset={handleReset}
                      // handleDelete={handleDelete}
                      index={arrayIndex}
                    />
                  )
                );
              })}
              <ButtonSubmit
                id={arrayValue["media_uuid"]}
                handleSubmit={handleSubmit}
                index={arrayIndex}
              />
            </form>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Media;
