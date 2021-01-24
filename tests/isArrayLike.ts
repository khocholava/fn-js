import { isNumber } from './isNumber';
import { isFunction } from './isFunction';

export function isArrayLike(val: any) {
  if(!val) return;
  const len = val.length;
  return isNumber(len) && len >= 0 && !isFunction(val)
}