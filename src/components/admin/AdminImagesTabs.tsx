import { useProject } from "@/hooks";
import { AdminImages, AdminTabs } from ".";
import { ImageProvider } from "@/provider";

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
    <AdminTabs
      defaultValue="-1"
      tabLists={tabLists}
      addCallback={addCallback}
      deleteCallback={deleteCallback}
    />
  );
};
