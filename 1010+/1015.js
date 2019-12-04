// 给定正整数 K，你需要找出可以被 K 整除的、仅包含数字 1 的最小正整数 N。

// 返回 N 的长度。如果不存在这样的 N，就返回 -1。

//  

// 示例 1：

// 输入：1
// 输出：1
// 解释：最小的答案是 N = 1，其长度为 1。
// 示例 2：

// 输入：2
// 输出：-1
// 解释：不存在可被 2 整除的正整数 N 。
// 示例 3：

// 输入：3
// 输出：3
// 解释：最小的答案是 N = 111，其长度为 3。
//  

// 提示：

// 1 <= K <= 10^5

/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
  if(K % 2 === 0 || K % 5 === 0) return -1
  let length = 1
  for(let i = 1; i % K != 0; length++) {
    i = i % K; //避免数过大 每次取余
    i = i *10 + 1;
  }
  return length
};
