import expect from 'expect';
import regions from '../../src/regions';
import allRegions from '../../data/regions.json';
import unsupportedRegionCountryCodes from '../../data/countries_regions_unsupported.json';
import unsupportedCurrencyCodes from '../../data/currencies_unsupported.json';

describe('regions', () => {
  it('should find by id', () => {
    const result = regions.findById('africa');
    expect(result).toBeAn(Object);
    expect(result.name).toEqual('Africa');
    expect(result.countries).toBeAn(Array);
    expect(result.countries.length).toBeGreaterThan(0);
    expect(result.currencies).toBeAn(Array);
    expect(result.currencies.length).toBeGreaterThan(0);
    expect(result.languages).toBeAn(Array);
    expect(result.languages.length).toBeGreaterThan(0);
    expect(result.measurement_systems).toBeAn(Array);
    expect(result.measurement_systems.length).toBeGreaterThan(0);
  });

  it('should get raw data', () => {
    expect(regions.all.length).toBeGreaterThan(0);
  });

  it('should only return supported regions', () => {
    const allSupported = regions.supported.map((region) => region.id.toLowerCase());
    const unsupported = unsupportedRegionCountryCodes.map((unsupported) => unsupported.toLowerCase());
    expect(allSupported.length + unsupported.length).toEqual(allRegions.length);
    unsupported.map((code) => expect(allSupported).toNotContain(code));
  });

  it('should only return unsupported regions', () => {
    const allUnsupported = regions.unsupported.map((region) => region.id.toLowerCase());
    const unsupported = unsupportedRegionCountryCodes.map((unsupported) => unsupported.toLowerCase());
    expect(allUnsupported.length).toEqual(unsupported.length);
    unsupported.map((code) => expect(allUnsupported).toContain(code));
  });

  it('should not include unsupported currencies in any region', () => {
    const regionCurrencyCodes = regions.all.map((region) =>
      region.currencies.map((currency) =>
        currency.toLowerCase()
      )
    );

    unsupportedCurrencyCodes.map((code) => expect(regionCurrencyCodes).toNotContain(code.toLowerCase()));
  });
});
