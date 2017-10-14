import { all, find } from '../../src/continents';

describe('continents', () => {
  it('should export all continents', () => {
    expect(all).to.be.an('array');
    expect(all).to.not.be.empty;
  });

  it('should find a continent by name (case-insensitive)', () => {
    expect(find('AfRiCa')).to.have.property('name', 'Africa');
  });

  it('should find a continent by code (case-insensitive)', () => {
    expect(find('AnT')).to.have.property('name', 'Antarctica');
  });

  it('should return undefined when a continent is not found', () => {
    expect(find('bogus')).to.be.undefined;
  });
});
