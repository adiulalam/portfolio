import { z } from "zod";
import type { TypeOf } from "zod";
import { projects } from "../db/schema/project";
import { createSelectSchema } from "drizzle-zod";

const projectSelectSchema = createSelectSchema(projects, {
  details: z.string().array(),
  technologies: z.string().array(),
});

export const params = projectSelectSchema.pick({ id: true });

const body = {
  application: true,
  description: true,
  details: true,
  projectDate: true,
  repo: true,
  technologies: true,
  title: true,
} as const;

export const updateBody = projectSelectSchema.pick(body);

export const updateProjectService = z.object({
  params,
  body: updateBody,
});

export const insertProjectService = projectSelectSchema.pick({
  ...body,
  profileId: true,
});

export type ParamsInput = TypeOf<typeof params>;
export type UpdateProjectServiceInput = TypeOf<
  typeof updateProjectService
>["body"];
export type InsertProjectServiceInput = TypeOf<typeof insertProjectService>;
