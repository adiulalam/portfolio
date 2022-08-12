const ButtonSubmit = ({ id, handleSubmit }) => {
  return (
    <>
      <div class="flex place-content-center">
        <button
          class=" mb-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
          id={id}
        >
          Submit
        </button>
      </div>
    </>
  );
};

const ButtonReset = ({ name, handleReset }) => {
  return (
    <>
      <div class="inline px-1">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-2 border-blue-500 py-2 px-4 "
          name={name}
          onClick={(e) => {
            handleReset(e);
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
};

const ButtonDelete = ({ name, handleDelete }) => {
  return (
    <>
      <div class="inline px-1">
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 disabled:opacity-50"
          name={name}
          onClick={(e) => {
            handleDelete(e);
          }}
          disabled={true}
        >
          DELETE
        </button>
      </div>
    </>
  );
};

export { ButtonSubmit, ButtonReset, ButtonDelete };
