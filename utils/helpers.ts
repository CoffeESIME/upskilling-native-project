export const replaceHTMLEntities = (text: string) => {
  return text.replace(/&quot;/g, '"').replace(/&apos;/g, "'");
};
