const Input = ({ name, value, textValue, id, onTextChange }) => {
  return (
    <>
      <div class="flex place-content-center ">
        <label
          class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4"
          for="inline-full-name"
        >
          {name}:
        </label>
      </div>
      <div class="md:w-2/5">
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
            onTextChange(e);
          }}
          required
        />
      </div>
    </>
  );
};

export default Input;
