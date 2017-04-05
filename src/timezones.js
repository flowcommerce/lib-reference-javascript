import timezones from '../data/timezones.json';
import findWhere from './helpers/findWhere';

const find = name => findWhere(timezones, timezone =>
  timezone.name.toLowerCase() === name.toLowerCase());

export { timezones as all, find };
