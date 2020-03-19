# 选择排序

时间复杂度：O(n^2)

无论什么数据进去都是O(n²)的时间复杂度，所以用到它的时候，数据规模越小越好

稳定性：不稳定 (5 8 5 2 9)

```js
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}
```