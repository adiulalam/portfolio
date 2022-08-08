// import axios from "axios";
import { endpoint } from "./graphql";

const ContentObjects = async (headers, graphql) => {
  console.log(
    "axios {process.env.REACT_APP_URL}--->",
    `${process.env.REACT_APP_URL}`
  );
  console.log("axios endpoint--->", endpoint);

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphql),
  };

  const response = await fetch(endpoint, options);
  const data = await response.json();
  
  if (data?.data) {
    const result = data?.data?.portfolio_content[0];

    console.log(result); // data

    return result;
  } else {
    console.log(data.errors); 
  }
};

export default ContentObjects;
