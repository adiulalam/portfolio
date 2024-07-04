import { z } from "zod";
import type { TypeOf } from "zod";
import { profiles } from "../db/schema/profile";
import { createSelectSchema } from "drizzle-zod";

const profileSelectSchema = createSelectSchema(profiles, {
  loop: z.string().array(),
});

export const params = profileSelectSchema.pick({ id: true });
export const body = profileSelectSchema.pick({
  backgroundImage: true,
  base: true,
  career: true,
  description: true,
  education: true,
  email: true,
  fullName: true,
  github: true,
  linkedin: true,
  location: true,
  profilePic: true,
  resume: true,
  loop: true,
});

export const updateProfileService = z.object({
  params,
  body,
});

export type ParamsInput = TypeOf<typeof params>;
export type UpdateProfileServiceInput = TypeOf<
  typeof updateProfileService
>["body"];
