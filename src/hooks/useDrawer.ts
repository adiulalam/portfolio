import { DrawerContext } from "@/provider";
import { useState, useContext } from "react";

export const useDrawerContext = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return { isDrawerOpen, setIsDrawerOpen };
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  }
  return context;
};
