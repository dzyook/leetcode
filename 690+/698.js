// 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

// 示例 1：
                    // [1,2,2,3,3,4,5]
// 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// 输出： True
// 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
//  

// 注意:

// 1 <= k <= len(nums) <= 16
// 0 < nums[i] < 10000

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = 0
    for (let n of nums) sum += n
    if (sum % k != 0) return false

    let sub = sum / k
    nums.sort((a, b) => b-a) // 排序
    if (nums[0] > sub) return false;

    function dfs(nums, sub, exist) {
        if (sub == 0 && exist == nums.length) return true
        if (sub == 0) return dfs(nums, sum / k, exist)

        let flag = false
        for (let i = 0; i < nums.length; i++) { // 有序，减少dfs次数
            if (nums[i] == '.') continue // 剪枝；已遍历
            if (nums[i] > sub) continue; // 剪枝；当前元素 > 需要的
            if (nums[i] == nums[i - 1]) continue; //  剪枝；相同元素
            // 回溯
            let val = nums[i]
            nums[i] = '.'
            flag = flag || dfs(nums, sub - val, exist + 1)
            nums[i] = val
        }
        return flag
    }
    return dfs(nums, sub, 0);
};
