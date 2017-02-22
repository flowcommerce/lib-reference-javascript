/* global describe, it */
import expect from 'expect';

import reference from '../src/index';

// eslint-disable-next-line no-duplicate-imports
import { countries, currencies, languages, regions, timezones } from '../src/index';

describe('index module', () => {
  it('should export all modules as object', () => {
    expect(reference.countries).toBeA('object');
    expect(reference.countries.find).toBeA('function');
    expect(reference.countries.all).toBeA('array');

    expect(reference.currencies).toBeA('object');
    expect(reference.currencies.find).toBeA('function');
    expect(reference.currencies.all).toBeA('array');

    expect(reference.languages).toBeA('object');
    expect(reference.languages.find).toBeA('function');
    expect(reference.languages.all).toBeA('array');

    expect(reference.timezones).toBeA('object');
    expect(reference.timezones.find).toBeA('function');
    expect(reference.timezones.all).toBeA('array');

    expect(reference.regions).toBeAn(Object);
    expect(reference.regions.findById).toBeA(Function);
    expect(reference.regions.all).toBeAn(Array);
  });

  it('should export all modules individually', () => {
    expect(countries.find).toBeA('function');
    expect(countries.all).toBeA('array');

    expect(currencies.find).toBeA('function');
    expect(currencies.all).toBeA('array');

    expect(languages.find).toBeA('function');
    expect(languages.all).toBeA('array');

    expect(timezones.find).toBeA('function');
    expect(timezones.all).toBeA('array');

    expect(regions.findById).toBeA(Function);
    expect(regions.all).toBeAn(Array);
  });
});
