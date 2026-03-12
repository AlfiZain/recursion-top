export function fibs(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let result = [0, 1];

  for (let i = 2; i < num; i++) {
    result = [...result, result[i - 1] + result[i - 2]];
  }

  return result;
}

export function fibonacci(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const fibo1 = fibonacci(num - 1)[fibonacci(num - 1).length - 1];
  const fibo2 = fibonacci(num - 2)[fibonacci(num - 2).length - 1];
  return [...fibonacci(num - 1), fibo1 + fibo2];
}
