import { useSnackbar } from "@/hooks";
import { api } from "@/utils/api";
import type { Profile } from "@/server/db/schema/profile";

export const useUpdateProfile = () => {
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

  const onUpdate = (data: Profile) => {
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

  return { isPending, onUpdate };
};
