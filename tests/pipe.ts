function pipe<A, B>(value: A, f1: (a: A) => B): B;
function pipe<A, B, C>(value: A, f1: (a: A) => B, f2: (a: B) => C): C;
function pipe<A, B, C, D>(
  value: A,
  f1: (a: A) => B,
  f2: (a: B) => C,
  f3: (a: C) => D
): D;
function pipe(value: any, ...funcs: Array<(a: any) => any>): any {
  return funcs.reduce((value, func) => func(value), value);
}

// const addFive = (a: number) => a + 5;
// const minusTwo = (a: number) => a - 2;

// console.log(
//   pipe(
//     5,
//     addFive,
//     minusTwo
//   )
// );