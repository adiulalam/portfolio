const { default: axios } = require('axios');

require('dotenv').config();
// require('isomorphic-fetch');

async function conn({ query, variables }) {
  const response = await axios.post(
    process.env.REACT_APP_URL,
    { query, variables },
    {
      headers: {
        'Content-Type': 'application/json',
        // 'x-hasura-admin-secret': process.env.REACT_APP_ADMIN_SECRET,
        'x-hasura-role': 'visitor'
      },
    }
  );

  return response.data.data;
}

module.exports = { conn };
