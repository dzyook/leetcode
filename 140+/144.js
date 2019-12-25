// 给定一个二叉树，返回它的 前序 遍历。

//  示例:
// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [1,2,3]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return []
    const arr = [];
    function add(node) {
        arr.push(node.val)
        if(node.left) add(node.left)
        if(node.right) add(node.right)
    }
    add(root)
    return arr;
};