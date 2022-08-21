export const endpoint = process.env.REACT_APP_URL;

export const headers = {
	"Content-Type": "application/json",
	"x-hasura-role": "visitor",
};

export const graphqlQuery = {
	operationName: "getContent",
	query: `query getContent { portfolio_content { content_uuid profilePic backgroundImage fullName career resume education location email linkedin github description shortAboutMe { shortaboutme_uuid base loop } projects(order_by: { projectdate: desc }) { project_uuid title description projectdate time application repo details technologies media { media_uuid type src thumbnail } } } }`,
	variables: {},
};
