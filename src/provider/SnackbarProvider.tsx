import type { AlertColor } from "@mui/material";
import { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type SnackbarType = {
  isOpen: boolean;
  severity: AlertColor;
  message: string;
  duration?: number;
};

type SnackbarContextType = {
  config: SnackbarType;
  setConfig: Dispatch<SetStateAction<SnackbarType>>;
};

export const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<SnackbarType>({
    isOpen: false,
    severity: "success",
    message: "",
    duration: 5000,
  });

  return (
    <SnackbarContext.Provider value={{ config, setConfig }}>
      {children}
    </SnackbarContext.Provider>
  );
};
