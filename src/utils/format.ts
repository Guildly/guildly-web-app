interface Dictionary {
  [key: string]: any;
}

export function capitaliseFirst(string: string) {
  let formatString = string.charAt(0).toUpperCase() + string.slice(1);
  return formatString;
}

export function hasDictionary(list: Dictionary[], dict: Dictionary): boolean {
  return list.some((item) => JSON.stringify(item) === JSON.stringify(dict));
}

export function removeDictionary(
  list: Dictionary[],
  dict: Dictionary
): Dictionary[] {
  return list.filter((item) => JSON.stringify(item) !== JSON.stringify(dict));
}

export const keyValueExists = (
  array: { [key: string]: any }[],
  key: string,
  value: any
) => {
  return array.some((item) =>
    Object.entries(item).some(([k, v]) => k === key && v === value)
  );
};
