import { relations } from "drizzle-orm";
import {
  index,
  pgTable,
  timestamp,
  uuid,
  varchar,
  json,
} from "drizzle-orm/pg-core";
import { users } from "./user";
import { projects } from "./project";

export const profiles = pgTable(
  "profile",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    userId: uuid("userId")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    profilePic: varchar("profilePic", { length: 256 }),
    backgroundImage: varchar("backgroundImage", { length: 256 }),
    fullName: varchar("fullName", { length: 256 }),
    career: varchar("career", { length: 256 }),
    resume: varchar("resume", { length: 256 }),
    education: varchar("education", { length: 256 }),
    location: varchar("location", { length: 256 }),
    email: varchar("email", { length: 256 }),
    linkedin: varchar("linkedin", { length: 256 }),
    github: varchar("github", { length: 256 }),
    description: varchar("description", { length: 1024 }),
    base: varchar("base", { length: 256 }),
    loop: json("loop").$type<string[]>().default([]).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt")
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (profile) => ({
    userIdIdx: index("userId_idx").on(profile.userId),
  })
);

export const profilesRelations = relations(profiles, ({ one, many }) => ({
  user: one(users, { fields: [profiles.userId], references: [users.id] }),
  projects: many(projects),
}));
