import React, { useState } from "react";
// import { FormControl } from '@mui/material';
// import { useSelector } from "react-redux";
// import clsx from "clsx";

const Profile = (portfolioProps) => {
  const portfolioContent = portfolioProps.portfolioProps;
//   console.log("portfolioContent----->", portfolioContent.backgroundImage);

  // const [textValue, setTextValue] = useState(portfolioContent.backgroundImage);

  // const onTextChange = (e) => setTextValue(e.target.value);
  // const handleSubmit = () => console.log(textValue);
  // const handleReset = () => setTextValue("");

  return (
    <div>
<form class="w-full max-w-sm">
  <div class="flex items-center border-b border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Sign Up
    </button>
    <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
      Cancel
    </button>
  </div>
</form>
</div>
  );
};

export default Profile;
