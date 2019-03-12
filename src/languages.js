import languages from '../data/languages.json';
import findWhere from './helpers/findWhere';

const find = searchText => findWhere(languages, language => (
  language.name.toLowerCase() === searchText.toLowerCase()
  || language.iso_639_2.toLowerCase() === searchText.toLowerCase()
));

export { languages as all, find };
