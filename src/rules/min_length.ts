import { invalid } from "../utils.ts";
import { RuleReturn, Rule } from "../types.ts";

export function minLength(minValue: number): Rule {
  return function minLengthRule(value: any): RuleReturn {
    if (typeof value !== "string") {
      return invalid("minLength", { value, minValue }, false);
    }

    if (value.length < minValue) {
      return invalid("minLength", { value, minValue }, false);
    }
  };
}
