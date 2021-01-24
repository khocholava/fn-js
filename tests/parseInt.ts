import { isNumber } from './isNumber';

export function toInt(value: string): number;
export function toInt(value:  number): number;
export function toInt(value: any): number  {
  if(isNumber(value)) return value
  return +value;
}

console.log(toInt(11));