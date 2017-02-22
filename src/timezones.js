import timezones from '../data/timezones.json';

export const all = timezones;

export function find(q) {
  const qLower = q.toLowerCase();
  return timezones.find((c) =>
    c.name.toLowerCase() === qLower);
}

export default { find, all };
