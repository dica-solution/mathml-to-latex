/* eslint-disable prettier/prettier */
export const allCategoryCode: Record<string, boolean> = {
  '{': true,  // begin group
  '}': true,  // end group
  '$': true,  // math shift
  '&': true,  // algiment
  '#': true,  // macro
  '^': true,  // superscript
  '_': true,  // subscript
  '%': true,  // comment
  '\\': true,
};

export const normalizeCategoryCode = (str: string): string => {
  if (allCategoryCode[str]) {
    return `\\${str}`;
  }

  if (str.length > 1) {
    return str.replace('\\', '\\\\').replace('}', '\\}').replace('{', '\\{');
  }

  return str;
};
