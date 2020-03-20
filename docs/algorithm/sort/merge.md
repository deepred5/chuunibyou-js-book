# 归并排序

时间复杂度：O(nlogn)

稳定性：稳定

和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是O(nlogn）的时间复杂度。代价是需要额外的内存空间(merge的时候开辟临时数组)

分治法：分(`mergeSort`) 治(`merge`)

```js
function mergeSort(arr) {
  // 递归终止条件
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // 递归
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // 临时数组
  const result = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while(left.length) {
    result.push(left.shift());
  }

  while(right.length) {
    result.push(right.shift());
  }

  return result;
}
```