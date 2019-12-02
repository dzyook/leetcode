// 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。

// 返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：

// 如果 S[i] == "I"，那么 A[i] < A[i+1]
// 如果 S[i] == "D"，那么 A[i] > A[i+1]
//  

// 示例 1：
// 输出："IDID"
// 输出：[0,4,1,3,2]

// 示例 2：
// 输出："III"
// 输出：[0,1,2,3]

// 示例 3：
// 输出："DDI"
// 输出：[3,2,0,1]
//  

// 提示：

// 1 <= S.length <= 1000
// S 只包含字符 "I" 或 "D"。


// 思路: 为D 则反向添入值 为I或无 则添入顺序值

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  var N = S.length;
  var arr = [];
  var inum = 0;
  var dnum = N;
  for (let j = 0; j <=N; j++) {
    if(S[j] == 'I' || !S[j]) {   
      arr.push(inum)
      inum += 1
    } 
    else {
      arr.push(dnum)
      dnum -= 1
    }
  }
  return arr
};