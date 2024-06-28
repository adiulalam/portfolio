import type { FormType } from "@/types/AdminTypes";
import type {
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormResetField,
} from "react-hook-form";
import { Box, Button } from "@mui/material";
import type { Profile } from "@/server/db/schema/profile";
import type { Project } from "@/server/db/schema/project";
import type { Image } from "@/server/db/schema/image";

type ResetFieldType = {
  resetField: UseFormResetField<FormType>;
  resetFieldName: keyof Profile | keyof Project | keyof Image;
};

type RemoveFieldType = { remove?: UseFieldArrayRemove; index?: number };

type AddFieldType = {
  append?: UseFieldArrayAppend<FormType, never>;
  isLastElement?: boolean;
};

type AdminFormButtonsType = ResetFieldType & AddFieldType & RemoveFieldType;

export const AdminFormButtons = ({
  resetFieldName,
  resetField,
  remove,
  append,
  isLastElement,
  index,
}: AdminFormButtonsType) => {
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      {resetField && (
        <Button
          variant="contained"
          color="info"
          onClick={() => resetField(resetFieldName)}
          sx={{ height: "100%" }}
        >
          Reset
        </Button>
      )}

      {remove && typeof index === "number" && (
        <Button
          variant="contained"
          color="error"
          onClick={() => remove(index)}
          sx={{ height: "100%" }}
        >
          Delete
        </Button>
      )}

      {isLastElement && append && (
        <Button
          variant="contained"
          color="warning"
          onClick={() => append("")}
          sx={{ height: "100%" }}
        >
          Add
        </Button>
      )}
    </Box>
  );
};
