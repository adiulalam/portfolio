import { Controller } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { FormType } from "@/types/AdminTypes";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";

type FormDateType = {
  controllerProps: UseControllerProps<FormType>;
  label: string;
};

export const FormDate = ({ controllerProps, label }: FormDateType) => {
  return (
    <Controller
      {...controllerProps}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <DatePicker
            sx={{ width: "100%" }}
            format="DD/MM/YYYY"
            label={label}
            value={dayjs(value as string)}
            onChange={(value) => onChange(dayjs(value).toDate())}
            slotProps={{
              textField: {
                error: !!error,
                helperText: error?.message,
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};
