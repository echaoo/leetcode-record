/**
 * Created by echaoo on 2017/11/9.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString();
    var len = str.length;
    var times = len % 2 === 0 ? len / 2 : (len - 1) / 2;
    for(var i = 0; i < times; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(31213))