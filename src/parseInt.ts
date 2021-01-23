// @TODO add function override
export function toInt(
  value: number | Array<number | string>,
  deep: { deep: boolean }): number | Array<number> {
  const res = [];
  if (deep && Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      res.push(+value[i]);
    }
    return res;
  }
  return +value;
}