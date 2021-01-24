export function parseArrToInt(arr: Array<string>): Array<number>
export function parseArrToInt(arr: Array<string>): Array<number>
export function parseArrToInt(arr: Array<any>): Array<number> {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(+arr[i]);
  }
  return res;
}

