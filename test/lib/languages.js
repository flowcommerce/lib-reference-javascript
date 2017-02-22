import expect from 'expect';
import { find, all } from '../../src/languages';

describe('languages', () => {
  const expected = {
    name: 'English',
    iso_639_2: 'en',
    countries: [
      'ATG',
      'AUS',
      'BHS',
      'BRB',
      'BLZ',
      'BWA',
      'CMR',
      'CAN',
      'CUW',
      'DMA',
      'ERI',
      'FJI',
      'GMB',
      'GHA',
      'GRD',
      'GUY',
      'HKG',
      'IND',
      'IRL',
      'JAM',
      'KEN',
      'KIR',
      'LSO',
      'LBR',
      'MWI',
      'MYS',
      'MLT',
      'MHL',
      'MUS',
      'FSM',
      'NAM',
      'NRU',
      'NZL',
      'NGA',
      'PAK',
      'PLW',
      'PNG',
      'PHL',
      'RWA',
      'KNA',
      'LCA',
      'VCT',
      'WSM',
      'SYC',
      'SLE',
      'SGP',
      'SXM',
      'SLB',
      'ZAF',
      'SSD',
      'LKA',
      'SDN',
      'SWZ',
      'TZA',
      'TON',
      'TTO',
      'TUV',
      'UGA',
      'GBR',
      'USA',
      'VUT',
      'ZMB',
      'ZWE',
    ],
  };

  it('should find by name', () => {
    expect(find('English')).toEqual(expected);
  });

  it('should find by iso_639_2', () => {
    expect(find('en')).toEqual(expected);
  });

  it('should get raw data', () => {
    expect(all.length).toBeGreaterThan(0);
  });
});
