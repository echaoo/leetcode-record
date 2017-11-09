/**
 * Created by echaoo on 2017/11/9.
 */
/*
* @return {number}
*/
var reverse = function(x) {
    var str = x.toString()
    var mathSymbol = ''
    if (str[0] === '-') {
        mathSymbol = str.substr(0, 1);
        str = str.substr(1)
    }
    var rs = +(mathSymbol + str.split('').reverse().join(''))
    return (rs > 2147483647 || rs < -2147483648) ? 0 : rs
};