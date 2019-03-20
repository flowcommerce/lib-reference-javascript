import provinces from '../data/provinces.json';

function caseInsensitiveCompare(a, b) {
  if (a != null && b != null) {
    return a.toLowerCase() === b.toLowerCase();
  }

  return false;
}

function findById(value) {
  return provinces.find(province => caseInsensitiveCompare(province.id, value));
}

function findByIso(value) {
  return provinces.find(province => caseInsensitiveCompare(province.iso_3166_2, value));
}

export {
  provinces as all,
  findById,
  findByIso,
};
