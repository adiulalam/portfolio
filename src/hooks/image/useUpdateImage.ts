import { useSnackbar } from "@/hooks";
import { api } from "@/utils/api";
import type { Image } from "@/server/db/schema/image";

export const useUpdateImage = () => {
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

  const onUpdate = (data: Image) => {
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

  return { isPending, onUpdate };
};
