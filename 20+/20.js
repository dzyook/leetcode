// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

var isValid = function(s) {
  var Json = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (c in Json) {
            console.log(c, stack)
            var template = stack.length != 0 ? stack.pop() : '#';
            console.log('************',template)
            if (template !== Json[c]) {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
   return stack.length == 0;
};

console.log(isValid('[]{}()'))
