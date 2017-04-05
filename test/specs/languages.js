import { all, find } from '../../src/languages';

describe('languages', () => {
  it('should export all languages', () => {
    expect(all).to.be.an.array;
    expect(all).to.not.be.empty;
  });

  it('should find a language by name (case-insensitive)', () => {
    expect(find('dUtCh')).to.have.property('name', 'Dutch');
  });

  it('should find a language by ISO 639 2 code (case-insensitive)', () => {
    expect(find('nL')).to.have.property('name', 'Dutch');
  });

  it('should return undefined when a language is not found', () => {
    expect(find('bogus')).to.be.undefined;
  });
});
