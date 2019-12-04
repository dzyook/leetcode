// 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

// 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。

// 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

// 请你返回「表现良好时间段」的最大长度。

// 示例 1：

// 输入：hours = [9,9,6,0,6,6,9]
// 输出：3
// 解释：最长的表现良好时间段是 [9,9,6]。

// 提示：

// 1 <= hours.length <= 10000
// 0 <= hours[i] <= 16

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let num = 0;
  let result = []
  let arr = [...hours]
  for (let i = 0; i < hours.length; i++) {
      if (i != 0) {
          arr.shift()
          let n = 0
          arr.forEach(item => {
              if (item > 8) n += 1
              else n -= 1
          })
          if (n > 0 && arr.length > num) {
              num = arr.length
              result = [...arr]
          }
      }
      for (let j = hours.length - 1; j >= 0; j--) {
          if (j != hours.length) {
              let newArr = [...arr]
              newArr.pop()
              let m = 0
              newArr.forEach(item => {
                  if (item > 8) m += 1
                  else m -= 1
              })
              if (m>0&&newArr.length > num) {
                  num = newArr.length
                  result = [...newArr]
              }
          }

      }
  }
  console.log(result)
  return num
};