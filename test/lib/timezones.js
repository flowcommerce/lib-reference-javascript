import expect from 'expect';
import { find, all } from '../../src/timezones';

describe('timezones', () => {
  const expected = {
    description: 'Eastern African Time',
    name: 'Africa/Addis_Ababa',
    offset: 180,
  };

  it('should find by name', () => {
    expect(find('Africa/Addis_Ababa')).toEqual(expected);
  });

  it('should get raw data', () => {
    expect(all.length).toBeGreaterThan(0);
  });
});
