import type { FormType } from "@/types/AdminTypes";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useImage, useUpdateImage } from "@/hooks";
import { AdminButtonSave, AdminFieldArray, AdminFieldText } from ".";
import { Divider } from "@mui/material";

export const AdminImages = () => {
  const image = useImage();
  const { onUpdate, isPending } = useUpdateImage();

  const {
    control,
    handleSubmit,
    resetField,
    formState: { isDirty },
  } = useForm<FormType>({
    defaultValues: image,
    values: image,
  });

  const disabledFields: (keyof typeof image)[] = ["id", "projectId"];
  const notRequiredFields: (keyof typeof image)[] = ["internalSrc"];

  return (
    <form
      onSubmit={handleSubmit(onUpdate as SubmitHandler<FormType>)}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      {Object.entries(image).map(([key, value]) =>
        ["string", "number"].includes(typeof value) || !value ? (
          <AdminFieldText
            key={key}
            name={key as keyof typeof image}
            control={control}
            resetField={resetField}
            disabled={disabledFields.includes(key as keyof typeof image)}
            required={!notRequiredFields.includes(key as keyof typeof image)}
            isNumberType={typeof value === "number"}
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
      <AdminButtonSave isDirty={isDirty} isLoading={isPending} />
      <Divider />
    </form>
  );
};
