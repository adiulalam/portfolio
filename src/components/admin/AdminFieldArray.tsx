import type { FormKeyType, FormType } from "@/types/AdminTypes";
import { useFieldArray } from "react-hook-form";
import type { Control, UseFormResetField } from "react-hook-form";
import { FormTextField } from "../form";
import { startCase } from "lodash";
import { Box, Divider } from "@mui/material";
import { AdminFormButtons } from ".";

type AdminFieldArrayType = {
  control: Control<FormType>;
  name: FormKeyType;
  resetField: UseFormResetField<FormType>;
};

export const AdminFieldArray = ({
  control,
  name,
  resetField,
}: AdminFieldArrayType) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name as never,
  });

  return (
    <>
      <Divider />
      {fields.map((item, index) => (
        <Box
          key={item.id}
          sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <FormTextField
            controllerProps={{
              name: `${name}.${index}` as FormKeyType,
              control,
              rules: { required: true },
            }}
            fieldProps={{
              label: startCase(`${name}.${index}`),
              required: true,
            }}
          />
          <AdminFormButtons
            resetFieldName={`${name}.${index}` as FormKeyType}
            resetField={resetField}
            remove={remove}
            index={index}
            append={append}
            isLastElement={index === fields.length - 1}
          />
        </Box>
      ))}
    </>
  );
};
