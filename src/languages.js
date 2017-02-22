import languages from '../data/languages.json';

export const all = languages;

export function find(q) {
  const qLower = q.toLowerCase();
  return languages.find((c) =>
    c.iso_639_2.toLowerCase() === qLower || c.name.toLowerCase() === qLower);
}

export default { find, all };
