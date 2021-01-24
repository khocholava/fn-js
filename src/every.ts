export function every<T>(arr: Array<T>, predicate: (...val: any) => boolean): boolean {
  for(let i = 0; i < arr.length; i++) {
    if(predicate(arr[i], i, arr) === false) {
      return  false
    }
  }
  return true
}