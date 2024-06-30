import { useSnackbar } from "@/hooks";
import { api } from "@/utils/api";
import type { Project } from "@/server/db/schema/project";
import dayjs from "dayjs";

export const useUpdateProject = () => {
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

  const onUpdate = (data: Project) => {
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

  return { isPending, onUpdate };
};
