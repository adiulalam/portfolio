import { createContext } from "react";
import type { ReactNode } from "react";
import type { Image } from "@/server/db/schema/image";

type ImageContextType = Image | undefined;

export const ImageContext = createContext<ImageContextType>(undefined);

export const ImageProvider = ({
  children,
  image,
}: {
  children: ReactNode;
  image: ImageContextType;
}) => {
  return (
    <ImageContext.Provider value={image}>{children}</ImageContext.Provider>
  );
};
