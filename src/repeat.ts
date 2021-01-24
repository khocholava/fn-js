function repeat(str: string, n: number): string {
  let res = ''
  for(let i = 0; i < n; i++) {
    res+= str
  }
  return  res
}

console.log(repeat('a', 10));