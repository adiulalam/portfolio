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

export { ButtonSubmit };
