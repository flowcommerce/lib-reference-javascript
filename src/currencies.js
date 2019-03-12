import currencies from '../data/currencies.json';
import findWhere from './helpers/findWhere';

const find = searchText => findWhere(currencies, currency => (
  currency.name.toLowerCase() === searchText.toLowerCase()
  || currency.iso_4217_3.toLowerCase() === searchText.toLowerCase()
));

export { currencies as all, find };
