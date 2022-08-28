import Datepicker from "flowbite-datepicker/Datepicker";
import { useRef, useState } from "react";

const Input = ({ name, value, textValue, id, onTextChange, index }) => {
  return (
    <input
      class={` bg-gray-200 appearance-none border-2 ${
        value ? "" : "border-red-500"
      } rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500`}
      type="text"
      name={name}
      value={value}
      id={textValue[id]}
      readOnly={name === id ? true : false}
      onChange={(e) => {
        onTextChange(e, index);
      }}
    />
  );
};

const TextArea = ({ name, value, textValue, id, onTextChange, index }) => {
  return (
    <textarea
      rows="5"
      class={` resize-y file:bg-gray-200 appearance-none border-2 ${
        value ? "" : "border-red-500"
      } rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500`}
      type="text"
      name={name}
      value={value}
      id={textValue[id]}
      readOnly={name === id ? true : false}
      onChange={(e) => {
        onTextChange(e, index);
      }}
    ></textarea>
  );
};

const DatePick = ({ name, value, onTextChange, index, arrayindex }) => {
  const [dateState, setDateState] = useState(false);
  const DatePickID = JSON.stringify(arrayindex);

  const DatePicker = () => {
    const datepickerEl = document.getElementById(DatePickID);
    new Datepicker(datepickerEl, {
      autohide: false,
      format: "yyyy-mm-dd",
      todayBtn: true,
      todayHighlight: true,
    });
  };

  const inputRef = useRef(null);

  const SetDate = (e) => {
    e.preventDefault();
    inputRef.current.click();
    setDateState(true);
  };

  return (
    <div class="relative w-full">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 ">
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          ></path>
        </svg>

        <button
          class={
            "float-right bg-green-500 hover:bg-green-700 text-white font-bold rounded border-green-500 border-2 py-2 px-4 disabled:opacity-50"
          }
          onClick={(e) => {
            SetDate(e);
          }}
        >
          SET
        </button>
      </div>
      <input
        ref={inputRef}
        id={DatePickID}
        onClick={(e) => {
          DatePicker();
          onTextChange(e, index);
          setDateState(false);
        }}
        onChange={(e) => {
          DatePicker();
        }}
        value={value}
        name={name}
        class={`flex bg-gray-200 appearance-none border-2 ${
          value && dateState ? "" : "border-red-500"
        } rounded w-full py-2 px-4 text-gray-700 leading-normal pl-24 p-2.5 focus:outline-none focus:bg-white focus:border-purple-500 datepicker-input`}
        placeholder="Select date"
      />
    </div>
  );
};

export { Input, TextArea, DatePick };
