import type { FormKeyType, FormType } from "@/types/AdminTypes";
import type { Control, UseFormResetField } from "react-hook-form";
import { FormTextField } from "../../form";
import { startCase } from "lodash";
import { Box } from "@mui/material";
import { AdminButtonsField } from "..";

type AdminFieldTextType = {
  control: Control<FormType>;
  name: FormKeyType;
  required?: boolean;
  disabled?: boolean;
  isNumberType?: boolean;
  resetField: UseFormResetField<FormType>;
};

export const AdminFieldText = ({
  control,
  name,
  required,
  disabled,
  isNumberType,
  resetField,
}: AdminFieldTextType) => {
  return (
    <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <FormTextField
        controllerProps={{
          name,
          control,
          rules: {
            required,
          },
        }}
        fieldProps={{
          required,
          disabled,
          type: isNumberType ? "number" : "text",
          label: startCase(name),
          rows: name === "description" ? 8 : 1,
          multiline: name === "description",
        }}
      />
      <AdminButtonsField resetFieldName={name} resetField={resetField} />
    </Box>
  );
};
