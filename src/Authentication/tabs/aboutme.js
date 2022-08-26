import _ from "lodash";
import React, { useContext, useState } from "react";
import { portfolioContext } from "../../App";
import ContentObjects from "../../connection/connection";
import { mutationHeaders } from "../admin";
import { ButtonSubmit } from "../components/button";
import Form from "../components/form";
import { ErrorMessage } from "../components/message";

const AboutMe = () => {
  const headers = useContext(mutationHeaders);

  const { shortAboutMe } = useContext(portfolioContext);

  const [resetValue, setResetValue] = useState(shortAboutMe);
  const [textValue, setTextValue] = useState(shortAboutMe);
  const [submitValue, setSubmitValue] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  const onTextChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "loop") {
      const { loop } = textValue;
      const newLoop = [...loop];
      newLoop[index] = value;

      setTextValue((prevState) => ({
        ...prevState,
        [name]: newLoop,
      }));

      setSubmitValue((prevState) => ({
        ...prevState,
        [name]: newLoop,
      }));
    } else {
      setTextValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      setSubmitValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    console.clear();
    e.preventDefault();

    // console.log("submitValue", submitValue);

    let isEmpty = false;
    Object.entries(submitValue).map(([key, value]) => {
      if (!value.length) isEmpty = true;
    });
    if (_.isEmpty(submitValue)) isEmpty = true;

    if (isEmpty) {
      setErrorMessage(true);
      // console.log("IS EMPTY");
    } else {
      // console.log("NOT EMPTY");
      setErrorMessage(false);

      const shortaboutme_uuid = e.target.id;
      const variables = { updateAboutme: submitValue };
      const mutation = `mutation updateAboutMe($updateAboutme: portfolio_shortaboutme_set_input = {}) { update_portfolio_shortaboutme(where: {shortaboutme_uuid: {_eq: "${shortaboutme_uuid}"}}, _set: $updateAboutme) { affected_rows } }`;

      const graphqlQuery = {
        operationName: "updateAboutMe",
        query: mutation,
        variables: variables,
      };

      (async function fetchData() {
        await ContentObjects(headers, graphqlQuery);
        window.location.reload();
      })();
    }
  };

  const handleReset = (e, index) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === "loop") {
      const { loop } = textValue;
      // console.log("textValue", textValue);
      const newLoop = [...loop];
      // newLoop[index].splice(resetValue[name], 1);
      newLoop[index] = resetValue[name][index];

      setTextValue((prevState) => ({
        ...prevState,
        [name]: newLoop,
      }));

      setSubmitValue((prevState) => {
        if (_.isEqual([...loop], resetValue[name])) {
          delete prevState[name];
          return {
            ...prevState,
          };
        } else {
          return {
            ...prevState,
            [name]: newLoop,
          };
        }
      });
    } else {
      setTextValue((prevState) => ({
        ...prevState,
        [name]: resetValue[name],
      }));
      setSubmitValue((prevState) => {
        delete prevState[name];
        return {
          ...prevState,
        };
      });
    }
  };

  const handleDelete = (e, index) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === "loop") {
      const { loop } = textValue;
      const newLoop = [...loop];
      newLoop.splice(index, 1);

      setTextValue((prevState) => ({
        ...prevState,
        [name]: newLoop,
      }));

      setSubmitValue((prevState) => ({
        ...prevState,
        [name]: newLoop,
      }));

      setResetValue((prevState) => ({
        ...prevState,
        [name]: newLoop,
      }));
    } else {
      setTextValue((prevState) => ({
        ...prevState,
        [name]: resetValue[name],
      }));
      setSubmitValue((prevState) => {
        delete prevState[name];
        return {
          ...prevState,
        };
      });
    }
  };

  const handleAdd = (e, index) => {
    e.preventDefault();
    const { name } = e.target;
    const { loop } = textValue;
    const newLoop = [...loop, []];

    setTextValue((prevState) => ({
      ...prevState,
      [name]: newLoop,
    }));

    setSubmitValue((prevState) => ({
      ...prevState,
      [name]: newLoop,
    }));

    setResetValue((prevState) => ({
      ...prevState,
      [name]: newLoop,
    }));
  };

  return (
    <div class="flex justify-center">
      <form class="w-full max-w-2xl">
        {errorMessage && (
          <ErrorMessage error="Error!" message="Field is Empty" />
        )}
        {Object.entries(textValue).map(([key, value]) => {
          return !Array.isArray(value) ? (
            // Gives me all Objects
            <Form
              name={key}
              value={value}
              textValue={textValue}
              id="shortaboutme_uuid"
              onTextChange={onTextChange}
              handleReset={handleReset}
              handleDelete={handleDelete}
            />
          ) : (
            // Gives me all Array
            value.map((val, index) => (
              <Form
                name={key}
                value={val}
                textValue={value}
                id="shortaboutme_uuid"
                onTextChange={onTextChange}
                handleReset={handleReset}
                handleDelete={handleDelete}
                handleAdd={handleAdd}
                index={index}
              />
            ))
          );
        })}
        <ButtonSubmit
          id={textValue["shortaboutme_uuid"]}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default AboutMe;
