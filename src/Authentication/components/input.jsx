import { ButtonAdd, ButtonDelete, ButtonReset } from "./button";


const Input = ({
  name,
  value,
  textValue,
  id,
  onTextChange,
  handleReset,
  handleDelete,
  handleAdd,
  index,
}) => {
  return (
    <>
      <div class="md:flex md:items-center mb-6 space-x-1.5">
        <div class="flex place-content-center ">
          <label
            class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4"
            for="inline-full-name"
          >
            {Array.isArray(textValue) ? `${name}[${index}]` : name}:
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
            onChange={
              (e) => {
                onTextChange(e, index);
              }
            }
          />
        </div>
        <div class="flex place-content-center ">
          <ButtonReset name={name} handleReset={handleReset} index={index} />
          <ButtonDelete name={name} handleDelete={handleDelete} index={index}/>
          {index === textValue.length - 1 && (<ButtonAdd name={name} handleAdd={handleAdd} index={index} />)}
        </div>
      </div>
    </>
  );
};

export default Input;
