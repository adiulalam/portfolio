import type { FormType } from "@/types/AdminTypes";
import { useFieldArray, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useProfile, useProject } from "@/hooks";
import { FormTextField } from "../form";
import { startCase } from "lodash";
import { Box } from "@mui/material";
import { AdminFormButtons, AdminSaveButton } from ".";
import { Component } from "react";

export const AdminProjects = () => {
  const { id, title } = useProject();
  return (
    <div>
      {id} {title}
    </div>
  );
};
