export const qsort = <T>(array: Array<T>): Array<T> => {
  if (array.length < 2) return array;

  const pivot = array.pop()!;

  const less = array.filter((item) => item <= pivot);
  const greater = array.filter((item) => item > pivot);

  return qsort(less).concat([pivot], qsort(greater));
};
