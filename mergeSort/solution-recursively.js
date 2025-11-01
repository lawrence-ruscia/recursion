/*
  1. Sort the left half
  2. Sort the right half
  3. Merge the sorted halves
*/
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const res = [];

  let i = 0;
  let j = 0;

  // compare each number and push the lesser number
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  // push the remaining numbers if either array is empty
  while (i < left.length) {
    res.push(left[i]);
    i++;
  }

  while (j < right.length) {
    res.push(right[j]);
    j++;
  }

  return res;
}

const original = [3, 2, 1, 13, 8, 5, 0, 1];
const result = mergeSort(original);
console.log({ original, result });
