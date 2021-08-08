export default <T>(array: Array<T>): Array<T> => {
  const temp = Array.from(array);
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (temp[i] < temp[j]) {
        const tempValue = temp[i];
        temp[i] = temp[j];
        temp[j] = tempValue;
      }
    }
  }
  return temp;
};
