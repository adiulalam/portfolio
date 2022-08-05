import React from "react";

// const AboutMe = ({ AboutMe, onTextChange, handleReset, handleDelete }) => {
const AboutMe = ({ aboutMe, onTextChange }) => {
    // console.log("onTextChange---->", onTextChange);

  return Object.entries({ ...aboutMe }).map(([key, value]) => {
    // console.log("key--->", key)
    if (key !== "loop") {
      return (
        <div class="md:flex md:items-center mb-6 space-x-1.5">
    
          <div class="flex place-content-center ">
            <label
              class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4"
              for="inline-full-name"
            >
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
              id={aboutMe["shortaboutme_uuid"]}
              readOnly={key === "shortaboutme_uuid" ? true : false}
              onChange={onTextChange}
            />
          </div>
          <div class="flex place-content-center ">
            <div class="inline px-1">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-2 border-blue-500 py-2 px-4 "
                // name={key}
                // onClick={handleReset}
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
      );
    }
     else {
      return value.map((value, index) => (
        <div class="md:flex md:items-center mb-6 space-x-1.5">
    
        <div class="flex place-content-center ">
          <label
            class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4"
            for="inline-full-name"
          >
            {key}:
          </label>
        </div>
        <div class="md:w-2/5">
          <input
            class=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            name={key}
            key={index}
            value={value}
            required
            id={aboutMe["shortaboutme_uuid"]}
            readOnly={key === "shortaboutme_uuid" ? true : false}
            onChange={(e) => onTextChange(e, index)}
          />
        </div>
        <div class="flex place-content-center ">
          <div class="inline px-1">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-2 border-blue-500 py-2 px-4 "
              // name={key}
              // onClick={handleReset}
            >
              RESET
            </button>
          </div>
          <div class="inline px-1">
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 disabled:opacity-50"
              // onClick={handleDelete}
              disabled={false}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
      ));
    }
  });

};

export default AboutMe;
