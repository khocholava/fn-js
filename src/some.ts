function some<T>(arr: Array<T>, predicate: (...val: any) => boolean): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

const data = [ 2, 4, 6 ];

console.log(some(data, (item) => item === 4));