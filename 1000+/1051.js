// 学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。

// 请你返回至少有多少个学生没有站在正确位置数量。该人数指的是：能让所有学生以 非递减 高度排列的必要移动人数。

// 示例：

// 输入：[1,1,4,2,1,3]
// 输出：3
// 解释：
// 高度为 4、3 和最后一个 1 的学生，没有站在正确的位置。
//  

// 提示：

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100

function getNum(arr) {
  if(Array.isArray(arr)) {
    const originalArr = [...arr]
    arr.sort((a,b) => a-b)
    let num = 0
    console.log(arr, originalArr)
    arr.forEach((item, index) => {
      if (item !== originalArr[index]) num += 1
    })
    return num 
  }
  return '请输入数组'
}

console.log(getNum([1,5,4,2,1,3]))