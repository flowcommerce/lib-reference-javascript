import continents from '../data/continents.json';
import findWhere from './helpers/findWhere';

const find = searchText => findWhere(continents, continent =>
  continent.name.toLowerCase() === searchText.toLowerCase() ||
  continent.code.toLowerCase() === searchText.toLowerCase());

export { continents as all, find };
