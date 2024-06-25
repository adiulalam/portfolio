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
    profilePic: varchar("profilePic", { length: 256 }).notNull(),
    backgroundImage: varchar("backgroundImage", { length: 256 }).notNull(),
    fullName: varchar("fullName", { length: 256 }).notNull(),
    career: varchar("career", { length: 256 }).notNull(),
    resume: varchar("resume", { length: 256 }).notNull(),
    education: varchar("education", { length: 256 }).notNull(),
    location: varchar("location", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    linkedin: varchar("linkedin", { length: 256 }).notNull(),
    github: varchar("github", { length: 256 }).notNull(),
    description: varchar("description", { length: 1024 }).notNull(),
    base: varchar("base", { length: 256 }).notNull(),
    loop: json("loop").$type<string[]>().default([]).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt")
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (profile) => ({
    userIdIdx: index("profile_userId_idx").on(profile.userId),
  })
);

export const profilesRelations = relations(profiles, ({ one, many }) => ({
  user: one(users, { fields: [profiles.userId], references: [users.id] }),
  projects: many(projects),
}));

export type Profile = typeof profiles.$inferSelect;
