import type { FormType } from "@/types/AdminTypes";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useProfile, useSnackbar } from "@/hooks";
import { AdminButtonSave, AdminFieldArray, AdminFieldText } from ".";
import { api } from "@/utils/api";
import type { Profile } from "@/server/db/schema/profile";

export const AdminProfile = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { projects, ...profile } = useProfile();
  const { setConfig } = useSnackbar();

  const {
    profile: { getProfile },
  } = api.useUtils();

  const { mutate, isPending } = api.profile.updateProfile.useMutation({
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
    defaultValues: profile,
    values: profile,
  });

  const onSubmit = (data: Profile) => {
    console.log(data);
    const params = { id: data.id };
    const body = {
      backgroundImage: data.backgroundImage,
      base: data.base,
      career: data.career,
      description: data.description,
      education: data.education,
      email: data.email,
      fullName: data.fullName,
      github: data.github,
      linkedin: data.linkedin,
      location: data.location,
      profilePic: data.profilePic,
      resume: data.resume,
      loop: data.loop,
    };

    mutate({ params, body });
  };

  const disabledFields: (keyof typeof profile)[] = ["id", "userId"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit as SubmitHandler<FormType>)}
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
      <AdminButtonSave isDirty={isDirty} isLoading={isPending} />
    </form>
  );
};
