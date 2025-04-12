/**
 * A simpler version of the cn utility that doesn't rely on external libraries
 * with optional chaining or other modern syntax
 * @param  {...any} classes - Class names to be combined
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
