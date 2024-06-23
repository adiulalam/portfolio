import { relations } from "drizzle-orm";
import {
  index,
  pgTable,
  timestamp,
  uuid,
  varchar,
  json,
  date,
} from "drizzle-orm/pg-core";
import { profiles } from "./profile";
import { images } from "./image";

export const projects = pgTable(
  "project",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    profileId: uuid("profileId")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    title: varchar("title", { length: 256 }),
    description: varchar("description", { length: 512 }),
    projectDate: date("projectDate"),
    application: varchar("application", { length: 256 }),
    repo: varchar("repo", { length: 256 }),
    details: json("details").$type<string[]>().default([]).notNull(),
    technologies: json("technologies").$type<string[]>().default([]).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt")
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (project) => ({
    profileIdIdx: index("profileId_idx").on(project.profileId),
  })
);

export const projectsRelations = relations(projects, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [projects.profileId],
    references: [profiles.id],
  }),
  images: many(images),
}));
