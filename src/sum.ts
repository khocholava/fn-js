export function sum(arr: Array<number>) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}
