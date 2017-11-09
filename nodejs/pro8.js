/**
 * Created by echaoo on 2017/11/9.
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (parseInt(str)) {
        var rs = parseInt(str)
        if (rs > 2147483647) return 2147483647
        if (rs < -2147483648) return -2147483648
        return rs
    }
    return 0
};