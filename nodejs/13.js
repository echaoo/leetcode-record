/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanToIntMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    var sortRoman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    var result = 0
    var tempArr = s.split('')
    for (var i = 0; i < tempArr.length; i++) {
        if ((sortRoman.indexOf(tempArr[i + 1]) > sortRoman.indexOf(tempArr[i])) && (i < tempArr.length - 1)) {
            switch (tempArr[i + 1]) {
                case 'V': {
                    result += 4
                    i++
                    break
                }
                case 'X': {
                    result += 9
                    i++
                    break
                }
                case 'L': {
                    result += 40
                    i++
                    break
                }
                case 'C': {
                    result += 90
                    i++
                    break
                }
                case 'D': {
                    result += 400
                    i++
                    break
                }
                case 'M': {
                    result += 900
                    i++
                    break
                }
            }
        } else {
            result += romanToIntMap[tempArr[i]]
        }
    }
    return result
};

romanToInt('XXVII')
