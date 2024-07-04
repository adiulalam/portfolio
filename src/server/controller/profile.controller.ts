import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "../db";
import { projects } from "../db/schema/project";
import { images } from "../db/schema/image";
import type {
  ParamsInput,
  UpdateProfileServiceInput,
} from "../services/profile.service";
import type { Session } from "next-auth";
import { profiles } from "../db/schema/profile";

export const getProfileHandler = async () => {
  try {
    const result = await db.query.profiles.findFirst({
      with: {
        projects: {
          orderBy: [desc(projects.projectDate)],
          with: {
            images: {
              orderBy: [asc(images.order)],
            },
          },
        },
      },
    });

    return result;
  } catch (err) {
    throw err;
  }
};

export const updateProfileHandler = async ({
  input,
  session,
  params,
}: {
  input: UpdateProfileServiceInput;
  session: Session;
  params: ParamsInput;
}) => {
  try {
    const userId = session.user.id;
    const { id } = params;

    const result = await db
      .update(profiles)
      .set(input)
      .where(and(eq(profiles.id, id), eq(profiles.userId, userId)));

    return result;
  } catch (err) {
    throw err;
  }
};
