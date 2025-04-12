/**
 * A simple utility to conditionally join class names
 * @param  {...any} classes - Class names to be combined
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
