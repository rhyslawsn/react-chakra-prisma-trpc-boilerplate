import { TRPCError } from "@trpc/server";
import { deny, shield } from "trpc-shield";

import { Context } from "./context";

export const webPermissions = shield<Context>(
  {
    query: {},
    mutation: {},
  },
  {
    fallbackRule: deny,
    fallbackError: new TRPCError({
      code: "FORBIDDEN",
      message: "You are not allowed to access this resource",
    }),
  }
);
