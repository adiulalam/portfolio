import { type Config } from "drizzle-kit";
import { env } from "@/env";

export default {
  schema: "./src/server/db/schema/*",
  dialect: "postgresql",
  out: "./src/server/db/migrate",
  dbCredentials: {
    url: env.DATABASE_URL,
    user: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DB,
    port: Number(env.POSTGRES_PORT),
    host: env.POSTGRES_HOST,
  },
} satisfies Config;
