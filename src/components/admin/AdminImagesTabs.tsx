import { useDeleteImage, useInsertImage, useProject } from "@/hooks";
import { AdminImages } from ".";
import { ImageProvider } from "@/provider";
import { CustomTab } from "../ui";

export const AdminImagesTabs = () => {
  const { images } = useProject();

  const { onInsert } = useInsertImage();
  const { onDelete } = useDeleteImage();

  const tabLists = images!.map((image, index) => ({
    label: `Image ${index}`,
    value: image.id,
    component: (
      <ImageProvider image={image} key={image.id}>
        <AdminImages />
      </ImageProvider>
    ),
  }));

  return (
    <CustomTab
      defaultValue="-1"
      tabLists={tabLists}
      addCallback={onInsert}
      deleteCallback={onDelete}
    />
  );
};
