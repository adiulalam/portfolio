import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getProfileHandler } from "@/server/controller/profile.controller";

export const profileRouter = createTRPCRouter({
  getProfile: publicProcedure.query(() => getProfileHandler()),
});
