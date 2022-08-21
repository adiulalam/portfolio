const ButtonSubmit = ({ id, handleSubmit, index }) => {
  return (
    <>
      <div class="flex place-content-center">
        <button
          class=" mb-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
          type="submit"
          onClick={(e) => {
            handleSubmit(e, index);
          }}
          id={id}
        >
          Submit
        </button>
      </div>
    </>
  );
};

const ButtonReset = ({ name, handleReset, index }) => {
  return (
    <>
      <div class="inline px-1">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-2 border-blue-500 py-2 px-4 "
          name={name}
          onClick={(e) => {
            handleReset(e, index);
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
};

const ButtonDelete = ({ name, handleDelete, index }) => {
  return (
    <>
      <div class="inline px-1">
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 disabled:opacity-50"
          name={name}
          onClick={(e) => {
            handleDelete(e);
          }}
          disabled={
            index !== 0 &&
            (name === "loop" || name === "details" || name === "technologies")
              ? false
              : true
          }
        >
          DELETE
        </button>
      </div>
    </>
  );
};

const ButtonAdd = ({ name, handleAdd, index }) => {
  return (
    <>
      <div class="inline px-1">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold rounded border-green-500 border-2 py-2 px-4 disabled:opacity-50"
          name={name}
          onClick={(e) => handleAdd(e, index)}
        >
          ADD
        </button>
      </div>
    </>
  );
};

const ButtonAddTab = ({ handleAddTab }) => {
  return (
    <>
      <button onClick={(e) => handleAddTab(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="white"
          viewBox="0 0 22 22"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </>
  );
};

const ButtonDeleteTab = ({ handleDeleteTab, index, id }) => {
  return (
    <>
      <button
        class=" absolute float-right right-0 bottom-5 space-x-2 hover:bg-gray-500 rounded-full"
        onClick={(e) => handleDeleteTab(e, index, id)}
        id={id}
      >
        <svg
        aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          id={id}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
            id={id}
          />
        </svg>
      </button>
    </>
  );
};

export {
  ButtonSubmit,
  ButtonReset,
  ButtonDelete,
  ButtonAdd,
  ButtonAddTab,
  ButtonDeleteTab,
};
