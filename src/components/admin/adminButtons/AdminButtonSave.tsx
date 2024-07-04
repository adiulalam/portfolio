import { LoadingButton } from "@mui/lab";
import { Save as SaveIcon } from "@mui/icons-material";

export const AdminButtonSave = ({
  isDirty,
  isLoading,
}: {
  isDirty: boolean;
  isLoading: boolean;
}) => {
  return (
    <LoadingButton
      loading={isLoading}
      loadingPosition="end"
      endIcon={<SaveIcon />}
      variant="contained"
      type="submit"
      disabled={!isDirty}
      color="success"
      sx={{ display: "flex", alignSelf: "end", width: "min-content" }}
    >
      <span>Save</span>
    </LoadingButton>
  );
};
