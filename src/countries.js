import countries from '../data/countries.json';
import findWhere from './helpers/findWhere';

const find = searchText => findWhere(countries, country =>
  country.iso_3166_2.toLowerCase() === searchText.toLowerCase() ||
  country.iso_3166_3.toLowerCase() === searchText.toLowerCase() ||
  country.name.toLowerCase() === searchText.toLowerCase());

export { countries as all, find };
