import { useProject } from "@/hooks";
import { AdminImages } from ".";
import { ImageProvider } from "@/provider";
import { CustomTab } from "../ui";

export const AdminImagesTabs = () => {
  const { images } = useProject();

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
  };

  const deleteCallback = (id: string) => {
    console.log("deleteCallback", id);
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
