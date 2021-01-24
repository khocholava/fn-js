function swap<T>(arr: Array<T>, a: any, b: any): Array<T> {
  const temp = arr[a];
  arr[b] = arr[b];
  arr[b] = temp;
  return arr;
}