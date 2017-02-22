import expect from 'expect';
import { find, all } from '../../src/currencies';

describe('currencies', () => {
  const expected = { iso_4217_3: 'USD', name: 'US Dollars', number_decimals: 2 };

  it('should find by name', () => {
    expect(find('US Dollars')).toEqual(expected);
  });

  it('should find by iso_4217_3', () => {
    expect(find('USD')).toEqual(expected);
  });

  it('should get raw data', () => {
    expect(all.length).toBeGreaterThan(0);
  });
});
