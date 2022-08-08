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
    const result = data?.data?.portfolio_content[0];

    // console.log(result);

    return result;
  } else {
    console.log(data.errors); 
  }
};

export default ContentObjects;
