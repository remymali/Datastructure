function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);

    // Sort the left partition
    quickSort(arr, left, pivotIndex - 1);

    // Sort the right partition
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right]; // Choose the rightmost element as the pivot
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j); // Swap elements that are less than the pivot
    }
  }

  swap(arr, i + 1, right); // Swap the pivot with the element at the correct position
  return i + 1; // Return the pivot index
}

function swap(arr, i, j) {
  if (i !== j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

// Example usage:
const array = [9, 4, 7, 2, 1, 5, 6, 8, 3];
quickSort(array);
console.log(array);
