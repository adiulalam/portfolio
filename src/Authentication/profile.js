import React, { useContext, useState } from "react";
import { portfolioContext } from "../App";
import Intro from "./tabs/intro";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabs/react-tabs.css";

const Profile = () => {
	const portfolioContent = useContext(portfolioContext);

	const [textValue, setTextValue] = useState(portfolioContent);

	const onTextChange = (e) => {
		const { name, value } = e.target;
		setTextValue((prevState) => ({
			...prevState,
			[name]: value,
		}));
		// console.log(value);
	};

	const handleSubmit = () => console.log(textValue);

	const handleReset = (e) => {
		e.preventDefault();
		const { name } = e.target;
		setTextValue((prevState) => ({
			...prevState,
			[name]: portfolioContent[name],
		}));
		// console.log(value);
	};

	const handleDelete = (e) => {
		e.preventDefault();
	};

	return (
		<Tabs>
			<TabList>
				<Tab>Title 1</Tab>
				<Tab>Title 2</Tab>
			</TabList>

			<div>
				<div class="flex justify-center">
					<form class="w-full max-w-2xl">
						<TabPanel>
							<Intro textValue={textValue} onTextChange={onTextChange} handleReset={handleReset} handleDelete={handleDelete} />
						</TabPanel>
						<TabPanel>
							<h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">lorem ipsum</h1>
						</TabPanel>
						<div class="flex place-content-center">
							<button
								class=" mb-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
								type="button"
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</Tabs>
	);

	// return (
	// 	<div>
	// 		<div class="flex justify-center">
	// 			<form class="w-full max-w-2xl">
	// 			<TabPanel>
	// 				<Intro textValue={textValue} onTextChange={onTextChange} handleReset={handleReset} handleDelete={handleDelete} />
	// 				</TabPanel>
	// 				<TabPanel>
	// 			<h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">lorem ipsum</h1>
	// 		</TabPanel>
	// 				<div class="flex place-content-center">
	// 					<button
	// 						class=" mb-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
	// 						type="button"
	// 						onClick={handleSubmit}
	// 					>
	// 						Submit
	// 					</button>
	// 				</div>
	// 			</form>
	// 		</div>
	// 	</div>
	// );
};

export default Profile;
