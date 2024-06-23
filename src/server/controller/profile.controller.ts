import { db } from "../db";

export const getProfileHandler = async () => {
  try {
    const result = await db.query.profiles.findFirst({
      with: {
        projects: {
          with: {
            images: true,
          },
        },
      },
    });

    return result;
  } catch (err) {
    throw err;
  }
};
