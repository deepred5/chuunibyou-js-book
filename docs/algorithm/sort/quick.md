# 快速排序

时间复杂度：O(nlogn)

稳定性：不稳定

```js
function quickSort(arr, left, right) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[low];

  while (low < high) {
    while(low < high && arr[high] > pivot) {
      high--;
    }
    arr[low] = arr[high];

    while(low < high && arr[low] <= pivot) {
      low++
    }
    arr[high] = arr[low];
  }

  arr[low] = pivot;

  return low;
}
```