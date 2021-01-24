import { filter } from './filter';

function removeAr<T, U>(arr: Array<T>, index: number ): Array<U> {
  return filter(arr, (item, i) => i !== index)
}

const data = [1,2,4,6,6,3,2,1]
console.log(removeAr(data, 5));