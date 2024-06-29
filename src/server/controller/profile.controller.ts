import { asc, desc } from "drizzle-orm";
import { db } from "../db";
import { projects } from "../db/schema/project";
import { images } from "../db/schema/image";

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
