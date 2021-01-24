export function filter<T, U>(arr: Array<T>, predicate: (...item: any) => boolean): Array<U> {
  const res = []
  for(let i = 0; i < arr.length; i++) {
    if(predicate(arr[i], i, arr)) {
      res.push(arr[i])
    }
  }
  return res
}
