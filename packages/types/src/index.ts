export type ENVS = "dev" | "stg" | "prd";

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type RequireOnly<T, K extends keyof T> = {
  [Key in K]: T[Key];
};
