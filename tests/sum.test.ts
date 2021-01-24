import { sum } from '../src/sum';

test('Sum of array', () => {
  expect(sum([1,2,3,4,5,6])).toBe(21)
})