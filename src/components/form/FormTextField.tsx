import { Controller } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  TextField as MuiTextField,
} from "@mui/material";
import type { FormType } from "@/types/AdminTypes";
import type { TextFieldProps } from "@mui/material";

type FormTextFieldType = {
  controllerProps: UseControllerProps<FormType>;
  fieldProps: TextFieldProps;
};

export const FormTextField = ({
  controllerProps,
  fieldProps,
}: FormTextFieldType) => {
  return (
    <Controller
      {...controllerProps}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={!!error} fullWidth>
          <MuiTextField
            {...fieldProps}
            error={!!error}
            onChange={onChange}
            value={value ?? undefined}
          />
          <FormHelperText>{error ? error.message : null}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
