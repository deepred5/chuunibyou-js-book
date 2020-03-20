# 希尔排序

时间复杂度：O(nlogn)

稳定性：不稳定

:::tip
单个插入排序是稳定的，但是希尔排序是分成多个插入排序，如果相同元素被分到了
不同的插入排序中，就会导致不稳定
:::

插入排序的优化，第一个突破O(n^2)的排序算法

通过`gap`分成多段，每段进行插入排序。每次`gap`后，数据就会部分排序。最后一次`gap`为1，就是把整个数据插入排序一次。此时数据已经部分排序好了，所以效率更高

:::tip
`gap`越大，说明分段越多，每段的内容越少

`gap`越小，说明分段越少，每段的内容越多

希尔排序的`gap`是越来越小: gap -> 1
:::

希尔排序的核心在于间隔序列(`gap`)的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列

```js {2}
function shellSort(arr) {
  for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < arr.length; i++) {
      let current = arr[i];
      let preIndex = i - gap;

      while(preIndex >= 0 && arr[preIndex] > current) {
        arr[preIndex + gap] = arr[preIndex];
        preIndex -= gap;
      }
      arr[preIndex + gap] = current;
    }
  }
  return arr;
}
```