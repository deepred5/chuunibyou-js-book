# 计数排序

时间复杂度：O(n+k)

稳定性：稳定

非比较类排序，空间换时间

```js
function countSort(arr, maxValue) {
  // 创建额外数组
  const bucket = new Array(maxValue + 1);
  let sortedIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  // bucket数组下标即是arr的内容
  for (let j = 0; j < bucket.length; j++) {
    while(bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
}

```