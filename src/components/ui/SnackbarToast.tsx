import { useSnackbar } from "@/hooks";
import { Snackbar, Alert } from "@mui/material";

export const SnackbarToast = () => {
  const { config, setConfig } = useSnackbar();

  const { isOpen, severity, message, duration } = config;

  const handleClose = () => {
    setConfig({
      isOpen: false,
      severity,
      message,
    });
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={duration ?? 5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={severity}
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
