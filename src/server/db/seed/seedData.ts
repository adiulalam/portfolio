/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { drizzle } from "drizzle-orm/node-postgres";
// import postgres from "postgres";
import data from "./data.json";
import { profiles } from "../schema/profile";
import { projects } from "../schema/project";
// import schema from "../schema";
import { images } from "../schema/image";
import { db } from "..";

// if (!process.env.DATABASE_DIRECT_URL) {
//   throw new Error("DATABASE_URL not found on .env");
// }

// const queryClient = postgres(process.env.DATABASE_DIRECT_URL);

// const db = drizzle(queryClient, {
//   schema,
//   logger: true,
// });

const insertProfile = async (userId: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { projects, ...rest } = data;
  const profileData = { ...rest, userId };

  await db.insert(profiles).values(profileData);
};

const insertProjects = async () => {
  const { projects: seedProjects, id } = data;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const projectsData = seedProjects.map(({ media, ...rest }) => ({
    ...rest,
    profileId: id,
  }));

  await db.insert(projects).values(projectsData);
};

const insertImages = async () => {
  const { projects } = data;

  const imagesData = projects.flatMap(({ id, media }) =>
    media.map((image) => ({ ...image, projectId: id }))
  );

  await db.insert(images).values(imagesData);
};

const main = async () => {
  console.log("Seeding...");
  console.time("DB has been seeded!");
  const user = await db.query.users.findFirst({
    columns: {
      id: true,
    },
  });

  if (!user) throw new Error("User not found");

  // Profile
  await insertProfile(user.id);
  console.time("Profile been seeded!");

  // Project
  await insertProjects();
  console.time("Projects been seeded!");

  // Image
  await insertImages();
  console.time("Images been seeded!");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    console.log("Seeding done!");
    process.exit(0);
  });
