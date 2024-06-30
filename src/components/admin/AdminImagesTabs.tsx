import { useProject, useSnackbar } from "@/hooks";
import { AdminImages } from ".";
import { ImageProvider } from "@/provider";
import { CustomTab } from "../ui";
import { api } from "@/utils/api";

export const AdminImagesTabs = () => {
  const { id, images } = useProject();

  const { setConfig } = useSnackbar();

  const {
    profile: { getProfile },
  } = api.useUtils();

  const { mutate: insertMutate } = api.image.insertImage.useMutation({
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

  const { mutate: deleteMutate } = api.image.deleteImage.useMutation({
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

  const tabLists = images!.map((image, index) => ({
    label: `Image ${index}`,
    value: image.id,
    component: (
      <ImageProvider image={image} key={image.id}>
        <AdminImages />
      </ImageProvider>
    ),
  }));

  const addCallback = () => {
    console.log("addCallback");
    const body = {
      alt: "Alt tag",
      internalSrc: "internalSrc",
      order: 1,
      projectId: id,
      src: "src",
    };

    insertMutate(body);
  };

  const deleteCallback = (id: string) => {
    console.log("deleteCallback", id);
    deleteMutate({ id });
  };

  return (
    <CustomTab
      defaultValue="-1"
      tabLists={tabLists}
      addCallback={addCallback}
      deleteCallback={deleteCallback}
    />
  );
};
