export const endpoint = "https://welcome-elf-64.hasura.app/v1/graphql";

export const headers = {
  "Content-Type": "application/json",
  "x-hasura-role": "visitor",
};

export const graphqlQuery = {
  operationName: "getContent",
  query: `query getContent { portfolio_content { profilePic backgroundImage fullName career resume education location email linkedin github description shortAboutMe { base loop } projects(order_by: { projectdate: desc }) { title description time application details technologies media { type src thumbnail } } } }`,
  variables: {},
};
