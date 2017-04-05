const findWhere = (array, predicate) => {
  let index = -1;
  const length = array.length;

  // eslint-disable-next-line no-plusplus
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return array[index];
    }
  }

  return undefined;
};

export default findWhere;
