import regions from '../data/regions.json';
import findWhere from './helpers/findWhere';

const findById = id => findWhere(regions, region => region.id === id);

const findByName = name => findWhere(regions, region =>
  region.name.toLowerCase() === name.toLowerCase());

export { regions as all, findById, findByName };
