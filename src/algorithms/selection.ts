export default <T>(array: Array<T>): Array<T> => {
  const findSmallestIndex = (arr: Array<T>): number => {
    let smallest = arr[0],
      index = 0;
    arr.forEach((item, idx) => {
      if (item < smallest) {
        smallest = item;
        index = idx;
      }
    });
    return index;
  };

  const temp = Array.from(array);
  const result = new Array<T>();
  const range = temp.length;
  for (let i = 0; i < range; i++) {
    const index = findSmallestIndex(temp);
    result.push(temp[index]);
    temp.splice(index, 1);
  }

  return result;
};
