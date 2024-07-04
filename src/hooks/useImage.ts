import { ImageContext } from "@/provider";
import { useContext } from "react";

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used within a ImageProvider");
  }
  return context;
};
