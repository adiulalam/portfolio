import { z } from "zod";
import type { TypeOf } from "zod";
import { images } from "../db/schema/image";
import { createSelectSchema } from "drizzle-zod";

const imageSelectSchema = createSelectSchema(images);

export const params = imageSelectSchema.pick({ id: true });

const body = {
  alt: true,
  internalSrc: true,
  order: true,
  src: true,
} as const;

export const updateBody = imageSelectSchema.pick(body);

export const updateImageService = z.object({
  params,
  body: updateBody,
});

export const insertImageService = imageSelectSchema.pick({
  projectId: true,
  ...body,
});

export type ParamsInput = TypeOf<typeof params>;
export type UpdateImageServiceInput = TypeOf<typeof updateImageService>["body"];
export type InsertImageServiceInput = TypeOf<typeof insertImageService>;
