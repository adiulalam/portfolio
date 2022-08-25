import { useState } from "react";
import { ConfirmDelete } from "./message";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div class="inline px-1">
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold rounded border-red-500 border-2 py-2 px-4 disabled:opacity-50"
          type="button"
          onClick={() => setShowModal(true)}
          disabled={
            index !== 0 &&
            (name === "loop" || name === "details" || name === "technologies")
              ? false
              : true
          }
        >
          Delete
        </button>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-700 outline-none focus:outline-none">
                  <div class="p-6 text-center ">
                    <button
                      onClick={() => setShowModal(false)}
                      type="button"
                      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-toggle="popup-modal"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only ">Close modal</span>
                    </button>
                    <svg
                      aria-hidden="true"
                      class=" mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this?
                    </h3>
                  </div>
                  <div className="flex items-center justify-center p-6  border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      name={name}
                      onClick={(e) => {
                        handleDelete(e)
                        setShowModal(false)
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
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
