import { and, eq } from "drizzle-orm";
import { db } from "../db";
import type { Session } from "next-auth";
import { projects } from "../db/schema/project";
import type {
  UpdateProjectServiceInput,
  ParamsInput,
  InsertProjectServiceInput,
} from "../services/project.service";
import { profiles } from "../db/schema/profile";

export const insertProjectHandler = async ({
  input,
  session,
}: {
  input: InsertProjectServiceInput;
  session: Session;
}) => {
  try {
    const userId = session.user.id;

    const profile = await db
      .select()
      .from(profiles)
      .where(
        and(eq(profiles.id, input.profileId), eq(profiles.userId, userId))
      );

    if (!profile.length) {
      throw new Error("Profile with id, userId not found");
    }

    const result = await db.insert(projects).values(input);

    return result;
  } catch (err) {
    throw err;
  }
};

export const updateProjectHandler = async ({
  input,
  session,
  params,
}: {
  input: UpdateProjectServiceInput;
  session: Session;
  params: ParamsInput;
}) => {
  try {
    const userId = session.user.id;
    const { id } = params;

    const project = await db
      .select()
      .from(projects)
      .leftJoin(profiles, eq(profiles.id, projects.profileId))
      .where(and(eq(profiles.userId, userId), eq(projects.id, id)));

    if (!project.length) {
      throw new Error("Project with id, userId not found");
    }

    const result = await db
      .update(projects)
      .set(input)
      .where(eq(projects.id, id));

    return result;
  } catch (err) {
    throw err;
  }
};

export const deleteProjectHandler = async ({
  params,
  session,
}: {
  params: ParamsInput;
  session: Session;
}) => {
  try {
    const userId = session.user.id;
    const { id } = params;

    const project = await db
      .select()
      .from(projects)
      .leftJoin(profiles, eq(profiles.id, projects.profileId))
      .where(and(eq(profiles.userId, userId), eq(projects.id, id)));

    if (!project.length) {
      throw new Error("Project with id, userId not found");
    }

    const result = await db.delete(projects).where(eq(projects.id, id));

    return result;
  } catch (err) {
    throw err;
  }
};
