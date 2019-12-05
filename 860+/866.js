// 求出大于或等于 N 的最小回文素数。
// 回顾一下，如果一个数大于 1，且其因数只有 1 和它自身，那么这个数是素数。
// 例如，2，3，5，7，11 以及 13 是素数。
// 回顾一下，如果一个数从左往右读与从右往左读是一样的，那么这个数是回文数。
// 例如，12321 是回文数。
//  
// 示例 1：
// 输入：6
// 输出：7

// 示例 2：
// 输入：8
// 输出：11

// 示例 3：
// 输入：13
// 输出：101

// 提示：

// 1 <= N <= 10^8
// 答案肯定存在，且小于 2 * 10^8。

/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
    let num = null
    
    for(let i = N; i<2*10^8; i++) {
      let count = false
      let k = Math.floor(Math.sqrt(i))
      console.log(k)
      let num2 = null
      for(let j = 2; j <= k; j++){
        console.log('****',i % j)
        if(i % j !== 0) {
          count = true
          num2 = j
          break;
        }
      }
      if(count) {
        let str = String(num2)
        let newStr = str.split('').reverse().join('')
        if(str == newStr) {
          num = num2;
          break
        }
      }
  }
  console.log('**', num)
  return num
};
primePalindrome(6)