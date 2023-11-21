export const replaceHTMLEntities = (text: string) => {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&deg;/g, '°');
};
