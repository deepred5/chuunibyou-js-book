# 插入排序

时间复杂度：O(n^2)

稳定性：稳定

插入排序在对几乎已经排好序的数据操作时，效率高。但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位。(希尔排序优化)
```js
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let preIndex = i - 1;

    while (preIndex >= 0 && arr[preIndex] > current) {
      // 把元素一个个往后挪
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }

    arr[preIndex + 1] = current;
  }

  return arr;
}
```