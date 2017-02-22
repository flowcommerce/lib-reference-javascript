import expect from 'expect';
import { find, unsupported, supported, all} from '../../src/countries';
import allCountries from '../../data/countries.json';
import unsupportedRegionCountryCodes from '../../data/countries_regions_unsupported.json';

describe('countries', () => {
  const expected = {
    default_currency: 'USD',
    iso_3166_2: 'US',
    iso_3166_3: 'USA',
    languages: [
      'en',
    ],
    measurement_system: 'imperial',
    name: 'United States of America',
    timezones: [
      'America/New_York'
    ]
  };

  it('should find by name', () => {
    expect(find('United States of America')).toEqual(expected);
  });

  it('should find by iso_3166_2', () => {
    expect(find('US')).toEqual(expected);
  });

  it('should find by iso_3166_3', () => {
    expect(find('USA')).toEqual(expected);
  });

  it('should get raw data', () => {
    expect(all.length).toBeGreaterThan(0);
  });

  it('should only return supported countries', () => {
    const allSupported = all.map((country) => country.iso_3166_3.toLowerCase());
    const unsupportedCodes = unsupportedRegionCountryCodes.map((unsupported) => unsupported.toLowerCase());
    expect(supported.length + unsupported.length).toEqual(allCountries.length);
    unsupportedCodes.map((code) => expect(supported).toNotContain(code));
  });

  it('should only return unsupported countries', () => {
    const allUnsupported = unsupported.map((country) => country.iso_3166_3.toLowerCase());
    const unsupportedCodes = unsupportedRegionCountryCodes.map((unsupported) => unsupported.toLowerCase());
    expect(allUnsupported.length).toEqual(unsupportedCodes.length);
    unsupportedCodes.map((code) => expect(allUnsupported).toContain(code));
  });
});
