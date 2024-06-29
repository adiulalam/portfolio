import type { FormType } from "@/types/AdminTypes";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useProfile } from "@/hooks";
import { AdminButtonSave, AdminFieldArray, AdminFieldText } from ".";

export const AdminIntro = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { projects, ...profile } = useProfile();

  const {
    control,
    handleSubmit,
    resetField,
    formState: { isDirty },
  } = useForm<FormType>({
    defaultValues: profile,
    values: profile,
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  const disabledFields: (keyof typeof profile)[] = ["id", "userId"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      {Object.entries(profile).map(([key, value]) =>
        typeof value === "string" || !value ? (
          <AdminFieldText
            key={key}
            name={key as keyof typeof profile}
            control={control}
            resetField={resetField}
            disabled={disabledFields.includes(key as keyof typeof profile)}
            required={true}
          />
        ) : Array.isArray(value) ? (
          <AdminFieldArray
            key={key}
            name={key as keyof typeof profile}
            control={control}
            resetField={resetField}
          />
        ) : null
      )}
      <AdminButtonSave isDirty={isDirty} isLoading={false} />
    </form>
  );
};
