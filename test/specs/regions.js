import { all, findById, findByName } from '../../src/regions';

describe('regions', () => {
  it('should export all regions', () => {
    expect(all).to.be.an.array;
    expect(all).to.not.be.empty;
  });

  it('should find one by identifier', () => {
    expect(findById('europe')).to.have.property('name', 'Europe');
  });

  it('should find one by name (case-insensitive)', () => {
    expect(findByName('eUrOpE')).to.have.property('name', 'Europe');
  });
});
