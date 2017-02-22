import regions from '../data/regions.json';
import unsupportedRegionCountryCodes from '../data/countries_regions_unsupported.json';
import unsupportedCurrencyCodes from '../data/currencies_unsupported.json';
import { isSupported as isSupportedCountry } from './countries.js';

function isSupportedRegion(region) {
  return !unsupportedRegionCountryCodes.map((code) =>
    code.toLowerCase()
  ).includes(region.id.toLowerCase());
}

function isSupportedCurrency(currency) {
  return !unsupportedCurrencyCodes.map((code) =>
    code.toLowerCase()
  ).includes(currency.toLowerCase());
}

export const all = regions;

export const supported = regions.filter((region) => isSupportedRegion(region))
  .map((region) =>
    Object.assign(
      {},
      region,
      {
        countries: region.countries.filter((country) => isSupportedCountry(country)),
        currencies: region.currencies.filter((currency) => isSupportedCurrency(currency)),
      }
    )
  );

export const unsupported = regions.filter((region) => !isSupportedRegion(region));

export function findById(id) {
  const idLower = id.toLowerCase();
  return regions.find((r) =>
    r.id === idLower
  );
}

export default { findById, unsupported, supported, all };
