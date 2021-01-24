import { sum } from './sum';
import { parseArrToInt } from './parseArrToInt';

function average(arr: Array<number>): number;
function average(arr: Array<string>): number;
function average(arr: any): number {
  const len = arr.length;
  if (!Array.isArray(arr)) return;
  const parsedValue = parseArrToInt(arr);
  const arrSum = sum(parsedValue);
  return arrSum/ len
}
