import { all, find } from '../../src/currencies';

describe('currencies', () => {
  it('should export all currencies', () => {
    expect(all).to.be.an.array;
    expect(all).to.not.be.empty;
  });

  it('should find a currency by name (case-insensitive)', () => {
    expect(find('eGyPtIaN pOuNd')).to.have.property('name', 'Egyptian Pound');
  });

  it('should find a currency by ISO 4217 3 code (case-insensitive)', () => {
    expect(find('eGp')).to.have.property('name', 'Egyptian Pound');
  });

  it('should return undefined when a currency is not found', () => {
    expect(find('bogus')).to.be.undefined;
  });
});
