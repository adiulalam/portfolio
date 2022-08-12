const Input = ({ name, value, textValue, id, onTextChange, handleReset, handleDelete }) => {
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
      <div class="flex place-content-center ">
              <div class="inline px-1">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-2 border-blue-500 py-2 px-4 "
                  name={name}
                  onClick={(e) => {handleReset(e)}}
                >
                  RESET
                </button>
              </div>
              <div class="inline px-1">
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 disabled:opacity-50"
                  onClick={(e) => {handleDelete(e)}}
                  disabled={true}
                >
                  DELETE
                </button>
              </div>
            </div>
    </>
  );
};

export default Input;
