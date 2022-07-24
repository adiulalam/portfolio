const { default: axios } = require("axios");
require("dotenv").config();

async function conn({ query, variables }) {
  const response = await axios.post(
    process.env.REACT_APP_URL,
    { query, variables },
    {
      headers: {
        "Content-Type": "application/json",
        // 'x-hasura-admin-secret': process.env.REACT_APP_ADMIN_SECRET,
        "x-hasura-role": "visitor",
      },
    }
  );
  // this.setState({ appsDataApi: response.data }, () => {
  //   console.log(this.state.appsDataApi)
  // });

  return response.data.data;
}

module.exports = { conn };
