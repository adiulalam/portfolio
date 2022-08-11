import _ from "lodash";
import React, { useContext, useState } from "react";
import { portfolioContext } from "../../App";

const AboutMe = () => {
	const { shortAboutMe } = useContext(portfolioContext);

	const [resetValue, setResetValue] = useState(shortAboutMe);
	const [textValue, setTextValue] = useState(shortAboutMe);
	const [submitValue, setSubmitValue] = useState({});
	const [errorMessage, setErrorMessage] = useState(false);

	const onTextChange = (e, index) => {
		const { name, value } = e.target;
		if (name === "loop") {
			const { loop } = textValue;
			const newLoop = [...loop];
			newLoop[index] = value;

			setTextValue((prevState) => ({
				...prevState,
				[name]: newLoop,
			}));

			setSubmitValue((prevState) => ({
				...prevState,
				[name]: newLoop,
			}));
		} else {
			setTextValue((prevState) => ({
				...prevState,
				[name]: value,
			}));

			setSubmitValue((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (e) => {
		console.clear();
		e.preventDefault();

		console.log("submitValue", submitValue);

		let isEmpty = false;
		Object.entries(submitValue).map(([key, value]) => {
			if (!value.length) isEmpty = true;
		});
		if (_.isEmpty(submitValue)) isEmpty = true;

		if (isEmpty) {
			setErrorMessage(true);
			console.log("IS EMPTY");
		} else {
			console.log("NOT EMPTY");
			setErrorMessage(false);

			//   const shortaboutme_uuid = e.target.id;
			//   const variables = { updatedContent: submitValue };
			//   const mutation = `mutation updateContent($updatedContent: portfolio_content_set_input = {}) { update_portfolio_content(where: {shortaboutme_uuid: {_eq: "${shortaboutme_uuid}"}}, _set: $updatedContent) { affected_rows } }`;

			//   const graphqlQuery = {
			//     operationName: "updateContent",
			//     query: mutation,
			//     variables: variables,
			//   };

			//   (async function fetchData() {
			//     await ContentObjects(headers, graphqlQuery);
			//     window.location.reload();
			//   })();
		}
	};

	const handleReset = (e, index) => {
		e.preventDefault();
		const { name } = e.target;

		if (name === "loop") {
			const { loop } = textValue;
			console.log("textValue", textValue);
			const newLoop = [...loop];
			// newLoop[index].splice(shortAboutMe[name], 1);
			newLoop[index] = shortAboutMe[name][index];

			setTextValue((prevState) => ({
				...prevState,
				[name]: newLoop,
			}));

			setSubmitValue((prevState) => {
				if (_.isEqual([...loop], shortAboutMe[name])) {
					delete prevState[name];
					return {
						...prevState,
					};
				} else {
					return {
						...prevState,
						[name]: newLoop,
					};
				}
			});
		} else {
			setTextValue((prevState) => ({
				...prevState,
				[name]: shortAboutMe[name],
			}));
			setSubmitValue((prevState) => {
				delete prevState[name];
				return {
					...prevState,
				};
			});
		}
	};

	const handleDelete = (e, index) => {
		e.preventDefault();
		const { name } = e.target;

		if (name === "loop") {
			const { loop } = textValue;
			const newLoop = [...loop];
			newLoop.splice(index, 1);

			setTextValue((prevState) => ({
				...prevState,
				[name]: newLoop,
			}));

			setSubmitValue((prevState) => ({
				...prevState,
				[name]: newLoop,
			}));
		} else {
			setTextValue((prevState) => ({
				...prevState,
				[name]: shortAboutMe[name],
			}));
			setSubmitValue((prevState) => {
				delete prevState[name];
				return {
					...prevState,
				};
			});
		}
	};

	const handleAdd = (e, index) => {
		e.preventDefault();
		const { name } = e.target;
		const { loop } = textValue;
		const newLoop = [...loop, []];
		// newLoop.splice(index, 1);
		// setData(newLoop);

		setTextValue((prevState) => ({
			...prevState,
			[name]: newLoop,
		}));

		setSubmitValue((prevState) => ({
			...prevState,
			[name]: newLoop,
		}));
	};

	return (
		<div class="flex justify-center">
			<form class="w-full max-w-2xl">
				{errorMessage && (
					<div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
						<span class="font-medium">Error!</span> Field is Empty
					</div>
				)}
				{Object.entries(textValue).map(([key, value]) => {
					return key !== "loop" ? (
						<div class="md:flex md:items-center mb-6 space-x-1.5">
							<div class="flex place-content-center ">
								<label class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4" for="inline-full-name">
									{key}:
								</label>
							</div>
							<div class="md:w-2/5">
								<input
									class=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500"
									type="text"
									name={key}
									value={value}
									required
									readOnly={key === "shortaboutme_uuid" ? true : false}
									onChange={onTextChange}
								/>
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
										class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 disabled:opacity-50"
										// onClick={handleDelete}
										disabled={true}
									>
										DELETE
									</button>
								</div>
							</div>
						</div>
					) : (
						value.map((val, index) => (
							<div class="md:flex md:items-center mb-6 space-x-1.5">
								<div class="flex place-content-center ">
									<label class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4" for="inline-full-name">
										{`${key}[${index}]`}:
									</label>
								</div>
								<div class="md:w-2/5">
									<input
										class=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500"
										type="text"
										name={key}
										key={index}
										value={val}
										required
										readOnly={key === "shortaboutme_uuid" ? true : false}
										onChange={(e) => onTextChange(e, index)}
									/>
								</div>
								<div class="flex place-content-center ">
									<div class="inline px-1">
										<button
											class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-2 border-blue-500 py-2 px-4 "
											name={key}
											// value={val}
											onClick={(e) => handleReset(e, index)}
										>
											RESET
										</button>
									</div>
									<div class="inline px-1">
										<button
											class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 disabled:opacity-50"
											name={key}
											disabled={false}
											onClick={(e) => handleDelete(e, index)}
										>
											DELETE
										</button>
									</div>
									{index === value.length - 1 && (
										<div class="inline px-1">
											<button
												class="bg-green-500 hover:bg-green-700 text-white font-bold rounded border-green-500 border-2 py-2 px-4 disabled:opacity-50"
												// onClick={handleDelete}
												name={key}
												onClick={(e) => handleAdd(e, index)}
												disabled={false}
											>
												ADD
											</button>
										</div>
									)}
								</div>
							</div>
						))
					);
				})}
				<div class="flex place-content-center">
					{[textValue].map(({ shortaboutme_uuid }) => (
						<button
							class=" mb-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
							type="submit"
							onClick={handleSubmit}
							id={shortaboutme_uuid}
						>
							Submit
						</button>
					))}
				</div>
			</form>
		</div>
	);
};

export default AboutMe;
