/**
 * @param {string} s
 * @return {number}
 */
var intToRoman = function(num) {
    var result = ''
    var tempArr = num.toString().split('')
    var len = tempArr.length
    while (len) {
        var tempData
        var current  = parseInt(tempArr[tempArr.length - len])
        switch (len) {
            case 4: {
                tempData = new Array(current).fill('M')
                break
            }
            case 3: {
                switch (true) {
                    case current < 4: {
                        tempData = new Array(current).fill('C')
                        break
                    }
                    case current === 4: {
                        tempData = ['CD']
                        break
                    }
                    case current === 5: {
                        tempData = ['D']
                        break
                    }
                    case (5 < current && current < 9): {
                        tempData = new Array(current - 4).fill('C')
                        tempData[0] = 'D'
                        break
                    }
                    case current === 9: {
                        tempData = ['CM']
                        break
                    }
                }
                break
            }
            case 2: {
                switch (true) {
                    case current < 4: {
                        tempData = new Array(current).fill('X')
                        break
                    }
                    case current === 4: {
                        tempData = ['XL']
                        break
                    }
                    case current === 5: {
                        tempData = ['L']
                        break
                    }
                    case (5 < current && current < 9): {
                        tempData = new Array(current - 4).fill('X')
                        tempData[0] = 'L'
                        break
                    }
                    case current === 9: {
                        tempData = ['XC']
                        break
                    }
                }
                break
            }
            case 1: {
                switch (true) {
                    case (current < 4): {
                        tempData = new Array(current).fill('I')
                        break
                    }
                    case current === 4: {
                        tempData = ['IV']
                        break
                    }
                    case current === 5: {
                        tempData = ['V']
                        break
                    }
                    case (5 < current && current < 9): {
                        tempData = new Array(current - 4).fill('I')
                        tempData[0] = 'V'
                        break
                    }
                    case current === 9: {
                        tempData = ['IX']
                        break
                    }
                }
            }
        }
        result += tempData.join('')
        len--
    }
    return result
};

console.log(intToRoman(2000))
