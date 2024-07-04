import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import {
  deleteProjectHandler,
  insertProjectHandler,
  updateProjectHandler,
} from "@/server/controller/project.controller";
import {
  insertProjectService,
  updateProjectService,
  params,
} from "@/server/services/project.service";

export const projectRouter = createTRPCRouter({
  insertProject: protectedProcedure
    .input(insertProjectService)
    .mutation(({ input, ctx: { session } }) =>
      insertProjectHandler({
        session,
        input,
      })
    ),
  updateProject: protectedProcedure
    .input(updateProjectService)
    .mutation(({ input, ctx: { session } }) =>
      updateProjectHandler({
        session,
        params: input.params,
        input: input.body,
      })
    ),
  deleteProject: protectedProcedure
    .input(params)
    .mutation(({ input, ctx: { session } }) =>
      deleteProjectHandler({
        session,
        params: input,
      })
    ),
});
