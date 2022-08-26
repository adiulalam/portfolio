const Input = ({
  name,
  value,
  textValue,
  id,
  onTextChange,
  index,
}) => {
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

export { Input };
