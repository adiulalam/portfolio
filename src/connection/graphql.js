export const endpoint = "https://hasura.adiulalamadil.me/v1/graphql";

export const headers = {
  "Content-Type": "application/json",
  "x-hasura-role": "visitor",
};

export const graphqlQuery = {
  operationName: "getContent",
  query: `query getContent { portfolio_content { profilePic backgroundImage fullName career resume education location email linkedin github description shortAboutMe { base loop } projects(order_by: { projectdate: desc }) { title description time application repo details technologies media { type src thumbnail } } } }`,
  variables: {},
};
