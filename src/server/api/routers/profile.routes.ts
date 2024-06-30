import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import {
  getProfileHandler,
  updateProfileHandler,
} from "@/server/controller/profile.controller";
import { updateProfileService } from "@/server/services/profile.service";

export const profileRouter = createTRPCRouter({
  getProfile: publicProcedure.query(() => getProfileHandler()),
  updateProfile: protectedProcedure
    .input(updateProfileService)
    .mutation(({ input, ctx: { session } }) =>
      updateProfileHandler({
        session,
        params: input.params,
        input: input.body,
      })
    ),
});
