require("dotenv").config();
require("isomorphic-fetch");

async function conn({ query, variables }) {
  const response = await fetch(process.env.REACT_APP_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.REACT_APP_ADMIN_SECRET,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();
  return json;
}

module.exports = { conn };
