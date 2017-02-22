import currencies from '../data/currencies.json';

export const all = currencies;

export function find(q) {
  const qLower = q.toLowerCase();
  return currencies.find((c) =>
    c.iso_4217_3.toLowerCase() === qLower || c.name.toLowerCase() === qLower);
}

export default { find, all };
