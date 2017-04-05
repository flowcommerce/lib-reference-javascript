import { all, find } from '../../src/timezones';

describe('timezones', () => {
  it('should export all timezones', () => {
    expect(all).to.be.an.array;
    expect(all).to.not.be.empty;
  });

  it('should find one by name (case-insensitive)', () => {
    expect(find('aMeRiCa/neW_YoRK')).to.have.property('name', 'America/New_York');
  });
});
