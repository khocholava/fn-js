function moveZeroes<T>(array: string | Array<T>): Array<T> | string{
  let res = []
  if(!Array.isArray(array)) {
    res = [...array.split('').filter(item => item !== '0'),
      ... array.split('').filter(item => item === '0')]
    return res.join('')
  }
  return [...res.filter(item => item !== 0), ...res.filter(item => item === 0)]
}