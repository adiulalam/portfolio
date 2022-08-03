import React, { useContext, useState } from "react";
import { portfolioContext } from "../App";

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
			{[textValue].map(({ shortAboutMe, projects, ...rest }) => {
				return Object.entries({ ...rest }).map(([key, value]) => (
					<div class="flex justify-center">
						<form class="w-full max-w-2xl">
							<div class="md:flex md:items-center mb-6 space-x-1.5">
								<div class="flex place-content-center ">
									<label class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4" for="inline-full-name">
										{key}:
									</label>
								</div>
								<div class="md:w-2/5">
									{key === "content_uuid" ? (
										<input
											class=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500"
											type="text"
											// value="Jane Doe"
											name={key}
											value={value}
											readOnly
											onChange={onTextChange}
										/>
									) : (
										<input
											class=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500"
											type="text"
											// value="Jane Doe"
											name={key}
											value={value}
											onChange={onTextChange}
										/>
									)}
								</div>
								<div class="flex place-content-center ">
									<div class="inline px-1">
										<button
											class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-2 border-blue-500 py-2 px-4 "
											name={key}
											onClick={handleReset}
										>
											RESET
										</button>
									</div>
									<div class="inline px-1">
										<button
											class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 cursor-not-allowed"
											onClick={handleDelete}
										>
											DELETE
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				));
			})}
			<div class="flex place-content-center">
				<button
					class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
					type="button"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Profile;
