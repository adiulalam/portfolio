import React, { createContext, useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Redirect, Route, Switch } from "react-router-dom";
import Admin from "./Authentication/admin";
import Nav from "./components/Nav";
import Home from "./components/Pages";
import ContentObjects from "./connection/connection";
import Loading from "./connection/loading";
import { headers, graphqlQuery } from "./connection/graphql";
import { endpoint } from "./connection/graphql";

export const portfolioContext = createContext();

function App() {

	console.log("endpoint appjs---->", endpoint)
	console.log("REACT_APP_TES---->", process.env.REACT_APP_URL)
	console.log("REACT_APP_TEST---->", process.env.REACT_APP_TEST)
	console.log("REACT_APP_TEST_URL---->", process.env.REACT_APP_TEST_URL)

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		async function fetchData() {
			const result = await ContentObjects(headers, graphqlQuery);
			setData(result.data.portfolio_content[0]);
			setIsLoading(false);
		}
		fetchData();
	}, []);

	if (isLoading) return <Loading />;

	return (
		<div>
			<SkeletonTheme borderRadius="1rem" baseColor="black" highlightColor="blue">
				<portfolioContext.Provider value={data}>
					<Switch>
						<Route exact path="/admin" render={(props) => <Admin {...props} />} />
						<Nav>
							<Route exact path="/" render={(props) => <Home {...props} />} />
							<Route render={() => <Redirect to="/" />} />
						</Nav>
					</Switch>
				</portfolioContext.Provider>
			</SkeletonTheme>
		</div>
	);
}

export default App;
