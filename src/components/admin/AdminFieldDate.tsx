import type { FormKeyType, FormType } from "@/types/AdminTypes";
import type { Control, UseFormResetField } from "react-hook-form";
import { FormDate } from "../form";
import { startCase } from "lodash";
import { Box } from "@mui/material";
import { AdminFormButtons } from ".";

type AdminFieldDateType = {
  control: Control<FormType>;
  name: FormKeyType;
  resetField: UseFormResetField<FormType>;
};

export const AdminFieldDate = ({
  control,
  name,
  resetField,
}: AdminFieldDateType) => {
  return (
    <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <FormDate
        controllerProps={{
          name,
          control,
          rules: {
            required: true,
          },
        }}
        label={startCase(name)}
      />
      <AdminFormButtons resetFieldName={name} resetField={resetField} />
    </Box>
  );
};
