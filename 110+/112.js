// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

// 说明: 叶子节点是指没有子节点的节点。

// 示例: 
// 给定如下二叉树，以及目标和 sum = 22，

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \      \
//         7    2      1
// 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false
    let num = sum- root.val;
    if(num === 0 && !root.left && !root.right) return true; 
    var has = false
    function isLeft(node, n) {
        let num = n - node.val;
        if(num == 0 && !node.left && !node.right)  {  has = true; }
        if(node.left && !has) isLeft(node.left, num)
        if(node.right && !has) isLeft(node.right, num)
    }
    if(root.left && !has) isLeft(root.left, num)
    if(root.right && !has) isLeft(root.right, num)
    return has;
};

hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22)