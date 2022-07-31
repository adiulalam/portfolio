import React, { useState } from "react";
// import { FormControl } from '@mui/material';
// import { useSelector } from "react-redux";
// import clsx from "clsx";

const Profile = (portfolioProps) => {
  const portfolioContent = portfolioProps.portfolioProps;
  // console.log("portfolioContent----->", portfolioContent.backgroundImage);

  const [textValue, setTextValue] = useState(portfolioContent.backgroundImage);

  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue(portfolioContent.backgroundImage);

  return (
    <div class="flex justify-center">
      <form class="w-full max-w-2xl">
        <div class="md:flex md:items-center mb-6 space-x-1.5">
          <div class="flex place-content-center ">
            <label
              class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4"
              for="inline-full-name"
            >
              profilePic
            </label>
          </div>
          <div class="md:w-2/5">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              // value="Jane Doe"
              value={textValue}
              onChange={onTextChange}
            />
          </div>
          <div class="flex place-content-center ">
            <div class="inline px-1">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-2 border-blue-500 py-2 px-4 "
                onClick={handleReset}
              >
                RESET
              </button>
            </div>
            <div class="inline px-1">
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 cursor-not-allowed">
                DELETE
              </button>
            </div>
          </div>
        </div>
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
  );
};

export default Profile;
