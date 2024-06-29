import type { FormType } from "@/types/AdminTypes";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useImage } from "@/hooks";
import { AdminSaveButton, AdminFieldArray, AdminFieldText } from ".";
import { Divider } from "@mui/material";

export const AdminImages = () => {
  const image = useImage();

  const {
    control,
    handleSubmit,
    resetField,
    formState: { isDirty },
  } = useForm<FormType>({
    defaultValues: image,
    values: image,
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  const disabledFields: (keyof typeof image)[] = ["id", "projectId"];
  const notRequiredFields: (keyof typeof image)[] = ["internalSrc"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      {Object.entries(image).map(([key, value]) =>
        typeof value === "string" || !value ? (
          <AdminFieldText
            key={key}
            name={key as keyof typeof image}
            control={control}
            resetField={resetField}
            disabled={disabledFields.includes(key as keyof typeof image)}
            required={!notRequiredFields.includes(key as keyof typeof image)}
          />
        ) : Array.isArray(value) ? (
          <AdminFieldArray
            key={key}
            name={key as keyof typeof image}
            control={control}
            resetField={resetField}
          />
        ) : null
      )}
      <AdminSaveButton isDirty={isDirty} isLoading={false} />
      <Divider />
    </form>
  );
};
