// 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。
// 请你返回该链表所表示数字的 十进制值 。

// 示例 1：
// 输入：head = [1,0,1]
// 输出：5
// 解释：二进制数 (101) 转化为十进制数 (5)

// 示例 4：
// 输入：head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// 输出：18880
// 提示：

// 链表不为空。
// 链表的结点总数不超过 30。
// 每个结点的值不是 0 就是 1。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let num = 0;
    let length = 0
    function getLength(obj) {
        length ++;
        if(obj.next) {
          getLength(obj.next)  
        }
    }
    getLength(head);
    function add(obj) {
        if(obj.val) num += Math.pow(2,length-1)
        length --
        if(obj.next) add(obj.next)
    }
    add(head);
    return num;
};