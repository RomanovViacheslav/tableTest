export {};

function add(a: number, b: number): number {
  return a + b;
}

test('add function works correctly', () => {
  expect(add(2, 3)).toBe(5);
});
