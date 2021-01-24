function min(arr: Array<number>): number {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return  min
}

console.log(min([ 1, 2, -10 ]));