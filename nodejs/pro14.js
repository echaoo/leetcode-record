/**
 * Created by echaoo on 2017/12/24.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = ''
    if (strs.length !== 0) {
        for (let i = 0; i < strs[0].length; i++) {
            for(let j = 0; j < strs.length; j++) {
                if (strs[j][i]) {
                    if (strs[j-1] && (strs[j-1][i] !== strs[j][i])) {
                        return str
                    } else {
                        if (j === strs.length - 1) {
                            str+= strs[j][i]
                        }
                    }
                } else {
                    return str
                }
            }
        }
    }
    return str
};

let arr = ["aca","cba"]
console.log(longestCommonPrefix(arr))
