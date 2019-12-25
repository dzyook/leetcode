// 给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）
// 如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。
// 返回所有不常用单词的列表。
// 您可以按任何顺序返回列表。

// 示例 1：

// 输入：A = "this apple is sweet", B = "this apple is sour"
// 输出：["sweet","sour"]
// 示例 2：

// 输入：A = "apple apple", B = "banana"
// 输出：["banana"]

// 提示：

// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A 和 B 都只包含空格和小写字母。

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    if (!A && !B) return []
    const arr = A.split(' ').concat(B.split(' '));
    function isRepeat(arr) {
        let newArr = []
        for(let i = 0; i <arr.length; i++) {
            if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    return isRepeat(arr)
};
// 思路 1 字符串拼接找出不重复的单词
// 2 拼接数组 找出不重复的项