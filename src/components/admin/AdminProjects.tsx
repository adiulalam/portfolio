import type { FormType } from "@/types/AdminTypes";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useProject, useSnackbar } from "@/hooks";
import {
  AdminButtonSave,
  AdminFieldArray,
  AdminFieldText,
  AdminFieldDate,
} from ".";
import { api } from "@/utils/api";
import type { Project } from "@/server/db/schema/project";
import dayjs from "dayjs";

export const AdminProjects = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { images, ...project } = useProject();

  const { setConfig } = useSnackbar();

  const {
    profile: { getProfile },
  } = api.useUtils();

  const { mutate, isPending } = api.project.updateProject.useMutation({
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
    defaultValues: project,
    values: project,
  });

  const onSubmit = (data: Project) => {
    console.log(data);
    const params = { id: data.id };
    const body = {
      application: data.application,
      description: data.description,
      details: data.details,
      projectDate: dayjs(data.projectDate).format("YYYY-MM-DD"),
      repo: data.repo,
      technologies: data.technologies,
      title: data.title,
    };

    mutate({
      params,
      body,
    });
  };

  const disabledFields: (keyof typeof project)[] = ["id", "profileId"];
  const notRequiredFields: (keyof typeof project)[] = ["application", "repo"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit as SubmitHandler<FormType>)}
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
