import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import {
  deleteImageHandler,
  insertImageHandler,
  updateImageHandler,
} from "@/server/controller/image.controller";
import {
  insertImageService,
  updateImageService,
  params,
} from "@/server/services/image.service";

export const imageRouter = createTRPCRouter({
  insertImage: protectedProcedure
    .input(insertImageService)
    .mutation(({ input, ctx: { session } }) =>
      insertImageHandler({
        session,
        input,
      })
    ),
  updateImage: protectedProcedure
    .input(updateImageService)
    .mutation(({ input, ctx: { session } }) =>
      updateImageHandler({
        session,
        params: input.params,
        input: input.body,
      })
    ),
  deleteImage: protectedProcedure
    .input(params)
    .mutation(({ input, ctx: { session } }) =>
      deleteImageHandler({
        session,
        params: input,
      })
    ),
});
