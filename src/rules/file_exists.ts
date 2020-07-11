import { invalid } from "../utils.ts";
import { Validity, Rule } from "../types.ts";
import { exists } from "https://deno.land/std@0.60.0/fs/exists.ts";

export function fileExists(pathPrefix: string = ""): Rule {
  return async function fileExistsRule(value: any): Promise<Validity> {
    if (typeof value !== "string") {
      return invalid("fileExists:stringCheck", { value, pathPrefix });
    }

    const path = `${pathPrefix}${value}`;
    const isExists = await exists(path);
    if (!isExists) {
      return invalid("fileExists:pathCheck", { value, pathPrefix });
    }
  };
}
