import { v4, V4Options } from "uuid";
export type UID = string;

export const createUID = (): UID => {
  return v4();
};
