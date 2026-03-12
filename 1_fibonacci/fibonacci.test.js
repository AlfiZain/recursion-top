import { fibs, fibonacci } from './fibonacci';

describe('fibs function', () => {
  it('Gets the first sequence of fibonacci', () => {
    expect(fibs(1)).toEqual([0]);
  });
  it('Gets the second sequence of fibonacci', () => {
    expect(fibs(2)).toEqual([0, 1]);
  });
  it('Gets the third sequence of fibonacci', () => {
    expect(fibs(3)).toEqual([0, 1, 1]);
  });
  it('Gets the fourth sequence of fibonacci', () => {
    expect(fibs(4)).toEqual([0, 1, 1, 2]);
  });
  it('Gets the fifth sequence of fibonacci', () => {
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
  });
  it('Gets the sixth sequence of fibonacci', () => {
    expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });
  it('Gets the seventh sequence of fibonacci', () => {
    expect(fibs(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  it('Gets the eighth sequence of fibonacci', () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe('fibonacci function', () => {
  it('Gets the first sequence of fibonacci', () => {
    expect(fibonacci(1)).toEqual([0]);
  });
  it('Gets the second sequence of fibonacci', () => {
    expect(fibonacci(2)).toEqual([0, 1]);
  });
  it('Gets the third sequence of fibonacci', () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
  });
  it('Gets the fourth sequence of fibonacci', () => {
    expect(fibonacci(4)).toEqual([0, 1, 1, 2]);
  });
  it('Gets the fifth sequence of fibonacci', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });
  it('Gets the sixth sequence of fibonacci', () => {
    expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });
  it('Gets the seventh sequence of fibonacci', () => {
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  it('Gets the eighth sequence of fibonacci', () => {
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
