/**
 * Created by echaoo on 2017/12/14.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = []
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '{':
            case '[':
            case '(': stack.push(s[i]); break;
            case '}': if(stack.pop() !== '{') {return false} break
            case ']': if(stack.pop() !== '[') {return false} break
            case ')': if(stack.pop() !== '(') {return false} break
        }
    }
    return stack.length === 0
};

var str = '('
console.log(isValid(str))