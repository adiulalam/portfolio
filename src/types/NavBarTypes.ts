import type { Dispatch, SetStateAction } from "react";

export type DrawerType = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};
