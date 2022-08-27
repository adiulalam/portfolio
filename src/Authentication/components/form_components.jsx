import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

const DatePick = ({ name, value, textValue, id, onTextChange, index }) => {
  const [startDate, setStartDate] = useState(new Date(value));
  return (
    <>
      <DatePicker
      class={` resize-y file:bg-gray-200 appearance-none border-2 ${
        value ? "" : "border-red-500"
      } rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-500`}
     
      dateFormat="yyyy-MM-dd"
        // selected={new Date(value)}
        name={name}
        value={startDate}
        id={textValue[id]}
        // readOnly={name === id ? true : false}
        // onChange={(e, date) => {
        //   onTextChange(e, index);
        // }}
        yearDropdownItemNumber={10}
        scrollableYearDropdown={true}
        showYearDropdown
        showMonthDropdown
        
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        onTextChange()
        }}
      />
    </>
  );
};

export { Input, TextArea, DatePick };
