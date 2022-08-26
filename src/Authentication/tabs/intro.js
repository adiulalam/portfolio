import React, { useContext, useEffect, useState } from "react";
import { portfolioContext } from "../../App";
import ContentObjects from "../../connection/connection";
import { mutationHeaders } from "../admin";
import { ButtonSubmit } from "../components/button";
import Form from "../components/form";
import { ErrorMessage } from "../components/message";
import _ from 'lodash';

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
          <ErrorMessage error="Error!" message="Field is Empty" />
        )}
        {Object.entries({ ...textValue }).map(([key, value]) => (
            <Form
              name={key}
              value={value}
              textValue={textValue}
              id="content_uuid"
              onTextChange={onTextChange}
              handleReset={handleReset}
              handleDelete={handleDelete}
            />
        ))}
        <ButtonSubmit id={textValue['content_uuid']} handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Intro;
