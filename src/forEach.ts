function forEach<T>(arr: Array<T>, callback: (...params) => void): void {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}

forEach([1,2,3], item => console.log(item))