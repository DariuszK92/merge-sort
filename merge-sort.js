function mergeSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  let mid = arr.length / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  return merging(mergeSort(left), mergeSort(right));
}

function merging(arrleft, arrright) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < arrleft.length && j < arrright.length) {
    if (arrleft[i] < arrright[j]) {
      sortedArray.push(arrleft[i++]);
    } else sortedArray.push(arrright[j++]);
  }

  while (i < arrleft.length) {
    sortedArray.push(arrleft[i++]);
  }
  while (j < arrright.length) {
    sortedArray.push(arrright[j++]);
  }

  return sortedArray;
}

console.log(mergeSort([]));
console.log(mergeSort([5]));
console.log(mergeSort([4, 2, 7, 12, 24, 1, 3]));
console.log(mergeSort([12, 122, 15, 33, 12, 66, 676, 12, 6654, 321]));
