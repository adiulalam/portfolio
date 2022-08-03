import React, { useContext, useState } from "react";
import { portfolioContext } from "../App";
import Intro from "./tabs/intro";

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
		<div>
			<div class="flex justify-center">
				<form class="w-full max-w-2xl">
					<Intro textValue={textValue} onTextChange={onTextChange} handleReset={handleReset} handleDelete={handleDelete} />
					<div class="flex place-content-center">
						<button
							class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
							type="button"
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Profile;
