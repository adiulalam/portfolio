import { relations } from "drizzle-orm";
import { index, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { projects } from "./project";

export const images = pgTable(
  "image",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    projectId: uuid("projectId")
      .notNull()
      .references(() => projects.id, { onDelete: "cascade" }),
    src: varchar("src", { length: 256 }),
    internalSrc: varchar("internalSrc", { length: 256 }),
    alt: varchar("alt", { length: 256 }),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt")
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (image) => ({
    projectIdIdx: index("projectId_idx").on(image.projectId),
  })
);

export const imagesRelations = relations(images, ({ one }) => ({
  project: one(projects, {
    fields: [images.projectId],
    references: [projects.id],
  }),
}));
