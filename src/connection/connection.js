import { endpoint } from "./graphql";

const ContentObjects = async (headers, graphqlQuery) => {
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  const response = await fetch(endpoint, options);
  const data = await response.json();

  if (data?.data) {
    const result = data?.data;
    // console.log(result);
    return result;
  } else {
    console.log("ERROR ON Query", data.errors);
    return data.errors;
  }
};

export default ContentObjects;
