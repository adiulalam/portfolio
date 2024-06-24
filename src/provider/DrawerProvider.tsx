import { useDrawerContext } from "@/hooks";
import type { DrawerType } from "@/types/NavBarTypes";
import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useEffect } from "react";
import type { ReactNode } from "react";

export const DrawerContext = createContext<DrawerType | null>(null);

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const isMaxScreenMd = useMediaQuery(theme.breakpoints.down("md"));
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerContext();

  useEffect(() => {
    if (isMaxScreenMd !== null) {
      setIsDrawerOpen(!isMaxScreenMd);
    }
  }, [isMaxScreenMd, setIsDrawerOpen]);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
