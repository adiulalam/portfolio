import type { FormType } from "@/types/AdminTypes";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useProject, useUpdateProject } from "@/hooks";
import {
  AdminButtonSave,
  AdminFieldArray,
  AdminFieldText,
  AdminFieldDate,
} from ".";

export const AdminProjects = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { images, ...project } = useProject();
  const { onUpdate, isPending } = useUpdateProject();

  const {
    control,
    handleSubmit,
    resetField,
    formState: { isDirty },
  } = useForm<FormType>({
    defaultValues: project,
    values: project,
  });

  const disabledFields: (keyof typeof project)[] = ["id", "profileId"];
  const notRequiredFields: (keyof typeof project)[] = ["application", "repo"];

  return (
    <form
      onSubmit={handleSubmit(onUpdate as SubmitHandler<FormType>)}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      {Object.entries(project).map(([key, value]) =>
        ["projectDate"].includes(key) ? (
          <AdminFieldDate
            key={key}
            name={key as keyof typeof project}
            control={control}
            resetField={resetField}
          />
        ) : typeof value === "string" || !value ? (
          <AdminFieldText
            key={key}
            name={key as keyof typeof project}
            control={control}
            resetField={resetField}
            disabled={disabledFields.includes(key as keyof typeof project)}
            required={!notRequiredFields.includes(key as keyof typeof project)}
          />
        ) : Array.isArray(value) ? (
          <AdminFieldArray
            key={key}
            name={key as keyof typeof project}
            control={control}
            resetField={resetField}
          />
        ) : null
      )}
      <AdminButtonSave isDirty={isDirty} isLoading={isPending} />
    </form>
  );
};
