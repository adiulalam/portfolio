import type { Profile } from "@/server/db/schema/profile";
import type { Project } from "@/server/db/schema/project";
import type { Image } from "@/server/db/schema/image";

export type FormType = Profile | Project | Image;

export type FormKeyType = keyof Profile | keyof Project | keyof Image;
