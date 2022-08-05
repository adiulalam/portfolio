import axios from "axios";
import { endpoint } from "./graphql";

const ContentObjects = async (headers, graphql) => {
  const response = await axios({
    url: endpoint,
    method: "post",
    headers: headers,
    data: graphql,
  });

  if (response?.data) {
    const result = response.data;
    // console.log(response?.data);
    // setData(result);

    return result;
  } else {
    console.log(response.errors);
  }
};

export default ContentObjects;
