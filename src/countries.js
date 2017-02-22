import countries from '../data/countries.json';
import unsupportedCountryCodes from '../data/countries_regions_unsupported.json';

export function isSupported(countryCode) {
  return !unsupportedCountryCodes.map((code) =>
    code.toLowerCase()
  ).includes(countryCode.toLowerCase());
}

export const all = countries;
export const supported = countries.filter((country) => isSupported(country.iso_3166_3));
export const unsupported = countries.filter((country) => !isSupported(country.iso_3166_3));

export function find(q) {
  const qLower = q.toLowerCase();
  return countries.find((c) =>
    c.iso_3166_2.toLowerCase() === qLower ||
    c.iso_3166_3.toLowerCase() === qLower ||
    c.name.toLowerCase() === qLower);
}

export default { find, isSupported, unsupported, supported, all };
