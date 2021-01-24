export function map<T, U>(arr: Array<T>, callback: (...params: any) => Array<U>): Array<U> {
  const res = []
  for(let i = 0; i <arr.length; i++) {
    res.push(callback(arr[i], i, arr))
  }
  
  return res
}
