import { and, eq } from "drizzle-orm";
import { db } from "../db";
import type { Session } from "next-auth";
import { images } from "../db/schema/image";
import type {
  UpdateImageServiceInput,
  ParamsInput,
  InsertImageServiceInput,
} from "../services/image.service";
import { profiles } from "../db/schema/profile";
import { projects } from "../db/schema/project";

export const insertImageHandler = async ({
  input,
  session,
}: {
  input: InsertImageServiceInput;
  session: Session;
}) => {
  try {
    const userId = session.user.id;

    const project = await db
      .select()
      .from(projects)
      .leftJoin(profiles, eq(profiles.id, projects.profileId))
      .where(
        and(eq(profiles.userId, userId), eq(projects.id, input.projectId))
      );

    if (!project.length) {
      throw new Error("Project with id, userId not found");
    }

    const result = await db.insert(images).values(input);

    return result;
  } catch (err) {
    throw err;
  }
};

export const updateImageHandler = async ({
  input,
  session,
  params,
}: {
  input: UpdateImageServiceInput;
  session: Session;
  params: ParamsInput;
}) => {
  try {
    const userId = session.user.id;
    const { id } = params;

    const image = await db
      .select()
      .from(images)
      .leftJoin(projects, eq(projects.id, images.projectId))
      .leftJoin(profiles, eq(profiles.id, projects.profileId))
      .where(and(eq(profiles.userId, userId), eq(images.id, id)));

    if (!image.length) {
      throw new Error("Project with id, userId not found");
    }

    const result = await db.update(images).set(input).where(eq(images.id, id));

    return result;
  } catch (err) {
    throw err;
  }
};

export const deleteImageHandler = async ({
  params,
  session,
}: {
  params: ParamsInput;
  session: Session;
}) => {
  try {
    const userId = session.user.id;
    const { id } = params;

    const image = await db
      .select()
      .from(images)
      .leftJoin(projects, eq(projects.id, images.projectId))
      .leftJoin(profiles, eq(profiles.id, projects.profileId))
      .where(and(eq(profiles.userId, userId), eq(images.id, id)));

    if (!image.length) {
      throw new Error("Project with id, userId not found");
    }

    const result = await db.delete(images).where(eq(images.id, id));

    return result;
  } catch (err) {
    throw err;
  }
};
