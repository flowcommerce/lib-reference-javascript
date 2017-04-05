import { all, find } from '../../src/countries';

describe('countries', () => {
  it('should export all countries', () => {
    expect(all).to.be.an.array;
    expect(all).to.not.be.empty;
  });

  it('should find a country by name (case-insensitive)', () => {
    expect(find('bOlIvIa')).to.have.property('name', 'Bolivia');
  });

  it('should find a country by ISO 3166 2 code (case-insensitive)', () => {
    expect(find('bO')).to.have.property('name', 'Bolivia');
  });

  it('should find a country by ISO 3166 3 code (case-insensitive)', () => {
    expect(find('bOl')).to.have.property('name', 'Bolivia');
  });

  it('should return undefined when a country is not found', () => {
    expect(find('bogus')).to.be.undefined;
  });
});
