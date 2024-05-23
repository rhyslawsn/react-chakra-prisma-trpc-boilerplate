import * as trpc from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { CreateWSSContextFnOptions } from "@trpc/server/adapters/ws";

import { _auth } from "./services/auth";

export type ContextOptions =
  | CreateWSSContextFnOptions
  | CreateExpressContextOptions;

type ContextResult = {
  jwt?: string;
};

const defaultContext: ContextResult = {
  jwt: undefined,
};

export const createContext = async (
  opts: ContextOptions
): Promise<ContextResult> => {
  try {
    const jwt = _auth.getJwt(opts.req);

    // If no jwt, return the default context object
    if (!jwt) return defaultContext;

    return {
      jwt,
    };
  } catch (error) {
    console.error(error);

    return defaultContext;
  }
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
