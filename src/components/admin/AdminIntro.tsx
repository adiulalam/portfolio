import type { FormType } from "@/types/AdminTypes";
import { useFieldArray, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useProfile } from "@/hooks";
import { FormTextField } from "../form";
import { startCase } from "lodash";
import { Box } from "@mui/material";
import { AdminFormButtons, AdminSaveButton } from ".";

export const AdminIntro = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { projects, loop, ...profile } = useProfile();

  const {
    control,
    handleSubmit,
    resetField,
    formState: { isDirty },
  } = useForm<FormType>({
    defaultValues: {
      ...profile,
      loop,
    },
    values: {
      ...profile,
      loop,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "loop" as never,
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  const disabledFields = ["id", "userId"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      {Object.entries(profile).map(([key, value]) =>
        typeof value === "string" ? (
          <Box
            key={key}
            sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
          >
            <FormTextField
              controllerProps={{
                name: key as keyof typeof profile,
                control,
                rules: { required: true },
              }}
              fieldProps={{
                label: startCase(key),
                required: true,
                disabled: disabledFields.includes(key),
                rows: key === "description" ? 8 : 1,
                multiline: key === "description",
              }}
            />
            <AdminFormButtons
              resetFieldName={key as keyof typeof profile}
              resetField={resetField}
            />
          </Box>
        ) : null
      )}
      {fields.map((item, index) => (
        <Box
          key={item.id}
          sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <FormTextField
            controllerProps={{
              name: `loop.${index}`,
              control,
              rules: { required: true },
            }}
            fieldProps={{
              label: `loop.${index}`,
              required: true,
            }}
          />
          <AdminFormButtons
            resetFieldName={`loop.${index}` as keyof typeof profile}
            resetField={resetField}
            remove={remove}
            index={index}
            append={append}
            isLastElement={index === fields.length - 1}
          />
        </Box>
      ))}
      <AdminSaveButton isDirty={isDirty} isLoading={false} />
    </form>
  );
};
