import { useProfile, useSnackbar } from "@/hooks";
import { api } from "@/utils/api";
import dayjs from "dayjs";

export const useInsertProject = () => {
  const { id } = useProfile();
  const { setConfig } = useSnackbar();

  const {
    profile: { getProfile },
  } = api.useUtils();

  const { mutate } = api.project.insertProject.useMutation({
    onSuccess: async () => {
      await getProfile.invalidate();
      setConfig({
        isOpen: true,
        message: "Inserted successfully",
        severity: "success",
      });
    },
    onError: () =>
      setConfig({
        isOpen: true,
        message: "Could not Insert",
        severity: "error",
      }),
  });

  const onInsert = () => {
    console.log("addCallback");
    const body = {
      application: "Application URL",
      description: "Description",
      details: ["Detail 0"],
      profileId: id,
      projectDate: dayjs(new Date()).format("YYYY-MM-DD"),
      repo: "Repo URL",
      technologies: ["Tech 0"],
      title: "New Project",
    };

    mutate(body);
  };

  return { onInsert };
};
