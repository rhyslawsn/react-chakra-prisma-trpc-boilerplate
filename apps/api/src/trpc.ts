import { initTRPC } from "@trpc/server";

import { Context } from "./context";
import { webPermissions } from "./shield";

export const t = initTRPC.context<Context>().create();

// Web
export const procedure = t.procedure.use(webPermissions);
