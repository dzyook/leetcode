// 给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。
// 返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。

// 示例 1:

// 输入: [1,2,3,4,5], k=4, x=3
// 输出: [1,2,3,4]
//  

// 示例 2:

// 输入: [1,2,3,4,5], k=4, x=-1
// 输出: [1,2,3,4]
//  

// 说明:

// k 的值为正数，且总是小于给定排序数组的长度。
// 数组不为空，且长度不超过 104
// 数组里的每个元素与 x 的绝对值不超过 104
//  

// 更新(2017/9/19):
// 这个参数 arr 已经被改变为一个整数数组（而不是整数列表）。 请重新加载代码定义以获取最新更改。

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  const upArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= x) upArr.push({ key: 'up', value: arr[i] - x })
        if (arr[i] < x) upArr.push({ key: 'down', value: Math.abs(arr[i] - x) })
    }
    upArr.sort((a, b) => {
        if (a.value == b.value) {
            if (a.key === 'down') return -1
            return 1;
        }
        return a.value - b.value
    })
    upArr.length = k
    return upArr.map(i => {
        if (i.key === 'up') return i.value + x
        else return x - i.value
    }).sort((a, b) => a - b)
};
