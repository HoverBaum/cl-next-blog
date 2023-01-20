/**
 * Turns a string into a URL friendly slug.
 * @param str input string, may contain special letters and spaces.
 * @returns URL friendly slug.
 */
export const stringToSlug = (str: string): string => {
  return str.replace(/\s/g, '-').toLowerCase().replace('ä', 'ae');
}
