export function capitaliseFirst(string: string) {
  let formatString = string.charAt(0).toUpperCase() + string.slice(1);
  return formatString;
}