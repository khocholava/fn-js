import { map } from './map';

function zip<T, U>(value1: Array<T>, value2: Array<T>): Array<U> {
  return map(value1, (item, index) => [ item, value2[index]]);
}
