import { useProject, useSnackbar } from "@/hooks";
import { api } from "@/utils/api";

export const useInsertImage = () => {
  const { id } = useProject();
  const { setConfig } = useSnackbar();

  const {
    profile: { getProfile },
  } = api.useUtils();

  const { mutate } = api.image.insertImage.useMutation({
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
    const body = {
      alt: "Alt tag",
      internalSrc: "internalSrc",
      order: 1,
      projectId: id,
      src: "src",
    };

    mutate(body);
  };

  return { onInsert };
};
