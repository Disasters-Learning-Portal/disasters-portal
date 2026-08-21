import type { InternalContent } from "./types";

export function isInternalContent(c: unknown): c is InternalContent {
  return (
    typeof c === "object" &&
    c !== null &&
    "id" in c &&
    "mastheadImage" in c &&
    "title" in c &&
    "themes" in c &&
    "categories" in c &&
    (!("url" in c) || "body" in c)
  );
}

/**
 * Tuple-preserving map. Unlike `Array.prototype.map`, this retains the length
 * and positional structure of the input tuple in the return type.
 *
 * @param arr - The input tuple whose length and structure will be preserved.
 * @param fn - Mapping function applied to each element.
 * @returns A tuple of the same length as `arr` with each element transformed by `fn`.
 *
 * @example
 * const result = typedMap([a, b, c] as [A, A, A], transform);
 * // inferred as [B, B, B], not B[]
 */
export function typedMap<T, U, const Arr extends T[]>(
  arr: [...Arr],
  fn: (item: T) => U,
): { [K in keyof Arr]: U } {
  return arr.map(fn) as { [K in keyof Arr]: U };
}

/**
 * Returns an array of _typed_ key/values of the enumerable properties of an object.
 *
 * Note: Limiting Object.entries to a specific type may lead to inconsistencies between type-checking and runtime behavior.
 * Use this function when you are certain of the objects keys.
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- provides a valid type for Object.entries
export const getTypedEntries = Object.entries as <T extends object>(
  obj: T,
  // Using `ToStringKey` because Object.entries returns all keys as strings.
) => Array<[ToStringKey<T>, T[keyof T]]>;

/**
 * Converts object keys to their string literal types.
 */
type ToStringKey<T> = `${Extract<keyof T, string | number>}`;
