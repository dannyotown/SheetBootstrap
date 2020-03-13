export const partHighlight = (part, highlight, element, entity) => {
  return part.toLowerCase() === highlight.toString().toLowerCase() ? element : entity;
};
