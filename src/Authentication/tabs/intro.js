import React, { useContext, useEffect, useState } from "react";
import { portfolioContext } from "../../App";
import ContentObjects from "../../connection/connection";
import { mutationHeaders } from "../admin";
import Input from "../components/input";

// import _ from 'lodash';
const _ = require("lodash");

const Intro = () => {
  const headers = useContext(mutationHeaders);

  const { shortAboutMe, projects, ...restObject } =
    useContext(portfolioContext);

  const [textValue, setTextValue] = useState(restObject);
  const [submitValue, setSubmitValue] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  const onTextChange = (e) => {
    const { name, value } = e.target;
    setTextValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setSubmitValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isEmpty = false;
    Object.entries(submitValue).map(([key, value]) => {
      if (!value.length) isEmpty = true;
    });
    if (_.isEmpty(submitValue)) isEmpty = true;

    if (isEmpty) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);

      const content_uuid = e.target.id;
      const variables = { updatedContent: submitValue };
      const mutation = `mutation updateContent($updatedContent: portfolio_content_set_input = {}) { update_portfolio_content(where: {content_uuid: {_eq: "${content_uuid}"}}, _set: $updatedContent) { affected_rows } }`;

      const graphqlQuery = {
        operationName: "updateContent",
        query: mutation,
        variables: variables,
      };

      (async () => {
        await ContentObjects(headers, graphqlQuery);
        window.location.reload();
      })();
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setTextValue((prevState) => ({
      ...prevState,
      [name]: restObject[name],
    }));
    setSubmitValue((prevState) => {
      delete prevState[name];
      return {
        ...prevState,
      };
    });
    // console.log("name---->", e.target.name);
    // console.log(value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <div class="flex justify-center">
      <form class="w-full max-w-2xl">
        {errorMessage && (
          <div
            class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span class="font-medium">Error!</span> Field is Empty
          </div>
        )}
        {Object.entries({ ...textValue }).map(([key, value]) => (
          <div class="md:flex md:items-center mb-6 space-x-1.5">
            {/* <div class="flex place-content-center ">
              <label
                class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4"
                for="inline-full-name"
              >
                {key}:
              </label>
            </div>
            <div class="md:w-2/5">
              <input
                class={` bg-gray-200 appearance-none border-2 ${
                  value ? "" : "border-red-500"
                } rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500`}
                type="text"
                name={`${key}`}
                value={value}
                id={textValue["content_uuid"]}
                readOnly={key === "content_uuid" ? true : false}
                onChange={onTextChange}
                required
              />
            </div> */}
            <Input
              name={key}
              value={value}
              textValue={textValue}
              id="content_uuid"
              onTextChange={onTextChange}
            />
            <div class="flex place-content-center ">
              <div class="inline px-1">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-2 border-blue-500 py-2 px-4 "
                  name={key}
                  onClick={handleReset}
                >
                  RESET
                </button>
              </div>
              <div class="inline px-1">
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 disabled:opacity-50"
                  onClick={handleDelete}
                  disabled={true}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}

        <div class="flex place-content-center">
          {[textValue].map(({ content_uuid }) => (
            <button
              class=" mb-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={handleSubmit}
              id={content_uuid}
            >
              Submit
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Intro;
