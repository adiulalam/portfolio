import { ButtonAdd, ButtonDelete, ButtonReset } from "./button";
import { Input } from "./form_components";

const Form = ({
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
      <div class="md:grid md:grid-cols-5 mb-6 space-x-1.5 ">
        <div class="flex justify-center md:sm:justify-end ">
          <label
            class="block  text-gray-200 font-bold md:text-right mb-1 md:mb-0 px-4"
            for="inline-full-name"
          >
            {Array.isArray(textValue) ? `${name}[${index}]` : name}:
          </label>
        </div>
        <div class="flex col-span-3">
          <Input
            name={name}
            value={value}
            id={id}
            textValue={textValue}
            readOnly={name === id ? true : false}
            onTextChange={(e) => {
              onTextChange(e, index);
            }}
          />
        </div>
        <div class="flex justify-center md:sm:justify-start">
          <ButtonReset name={name} handleReset={handleReset} index={index} />
          {Array.isArray(textValue) && (
            <ButtonDelete
              name={name}
              handleDelete={handleDelete}
              index={index}
            />
          )}
          {Array.isArray(textValue) && index === textValue.length - 1 && (
            <ButtonAdd name={name} handleAdd={handleAdd} index={index} />
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
