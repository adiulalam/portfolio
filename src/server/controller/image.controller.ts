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
import { users } from "../db/schema/user";

export const insertImageHandler = async ({
  input,
  session,
}: {
  input: InsertImageServiceInput;
  session: Session;
}) => {
  try {
    const userId = session.user.id;

    const image = await db.query.images.findFirst({
      where: eq(users.id, userId),
    });

    if (!image) {
      throw new Error("Image with userId not found");
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

    const result = await db
      .update(images)
      .set(input)
      .where(and(eq(images.id, id), eq(profiles.userId, userId)));

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

    const result = await db
      .delete(images)
      .where(and(eq(images.id, id), eq(profiles.userId, userId)));

    return result;
  } catch (err) {
    throw err;
  }
};
