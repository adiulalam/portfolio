import { useSnackbar } from "@/hooks";
import { api } from "@/utils/api";

export const useDeleteImage = () => {
  const { setConfig } = useSnackbar();

  const {
    profile: { getProfile },
  } = api.useUtils();

  const { mutate } = api.image.deleteImage.useMutation({
    onSuccess: async () => {
      await getProfile.invalidate();
      setConfig({
        isOpen: true,
        message: "Deleted successfully",
        severity: "success",
      });
    },
    onError: () =>
      setConfig({
        isOpen: true,
        message: "Could not Delete",
        severity: "error",
      }),
  });

  const onDelete = (id: string) => {
    console.log("deleteCallback", id);
    mutate({ id });
  };

  return { onDelete };
};
