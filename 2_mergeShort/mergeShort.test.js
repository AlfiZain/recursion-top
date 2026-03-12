import { mergeShort } from './mergeShort';

describe('mergeShort', () => {
  it('returns empty array for empty input', () => {
    expect(mergeShort([])).toEqual([]);
  });
  it('returns same array for single element', () => {
    expect(mergeShort([73])).toEqual([73]);
  });
  it('keeps already sorted array', () => {
    expect(mergeShort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it('sorts unsorted numbers', () => {
    expect(mergeShort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });
  it('sorts numbers including hundreds', () => {
    expect(mergeShort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
