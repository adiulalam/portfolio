import axios from "axios";
import { endpoint, graphqlQuery, headers } from "./graphql";

const ContentObjects = async () => {
	const response = await axios({
		url: endpoint,
		method: "post",
		headers: headers,
		data: graphqlQuery,
	});

	if (response?.data) {
		const result = response.data.data.portfolio_content[0];
		// console.log(result);
		// setData(result);

		return result;
	} else {
		console.log(response.errors);
	}
};

export default ContentObjects;
