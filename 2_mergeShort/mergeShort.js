export function mergeShort(array) {
  if (array.length <= 1) return array;

  const divider = Math.ceil(array.length / 2);
  const leftArr = array.slice(0, divider);
  const rightArr = array.slice(divider);

  const leftResult = mergeShort(leftArr);
  const rightResult = mergeShort(rightArr);

  return array.map((_) => {
    if (leftResult[0] < rightResult[0] || rightResult[0] === undefined) {
      return leftResult.shift();
    } else {
      return rightResult.shift();
    }
  });
}
