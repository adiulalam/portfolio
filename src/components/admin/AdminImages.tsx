import type { FormType } from "@/types/AdminTypes";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useImage, useSnackbar } from "@/hooks";
import { AdminButtonSave, AdminFieldArray, AdminFieldText } from ".";
import { Divider } from "@mui/material";
import type { Image } from "@/server/db/schema/image";
import { api } from "@/utils/api";

export const AdminImages = () => {
  const image = useImage();

  const { setConfig } = useSnackbar();

  const {
    profile: { getProfile },
  } = api.useUtils();

  const { mutate, isPending } = api.image.updateImage.useMutation({
    onSuccess: async () => {
      await getProfile.invalidate();
      setConfig({
        isOpen: true,
        message: "Updated successfully",
        severity: "success",
      });
    },
    onError: () =>
      setConfig({
        isOpen: true,
        message: "Could not update",
        severity: "error",
      }),
  });

  const {
    control,
    handleSubmit,
    resetField,
    formState: { isDirty },
  } = useForm<FormType>({
    defaultValues: image,
    values: image,
  });

  const onSubmit = (data: Image) => {
    console.log(data);

    const params = { id: data.id };
    const body = {
      alt: data.alt,
      internalSrc: data.internalSrc,
      order: Number(data.order),
      src: data.src,
    };

    mutate({
      params,
      body,
    });
  };

  const disabledFields: (keyof typeof image)[] = ["id", "projectId"];
  const notRequiredFields: (keyof typeof image)[] = ["internalSrc"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit as SubmitHandler<FormType>)}
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
