/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var len = height.length
    if(len < 3) return 0
    let result = []
    let maxIndex = 0
    for(let i = 0; i < len; i++) {
        if (i === len - 1) {
            if (height[i] > height[i -1])  {
                let {max, container} = getRightMaxIndex(maxIndex, i, height)
                maxIndex = max
                result = resetResult(maxIndex, i, result)
                result.push(container)
            } else {
                result.push(0)
            }
            return getMaxRes(maxIndex, i, result)
        }
        if (i < 3) {
            result.push(0)
            if (height[maxIndex] < height[i - 1]) maxIndex = i
            continue
        }
        if (height[i] <= height[i + 1]) {
            result.push(0)
            if (height[maxIndex] < height[i - 1]) maxIndex = i
            continue
        }
        if (height[i] > height[i + 1] && height[i] > height[i - 1]) {
            let {max, container} = getRightMaxIndex(maxIndex, i, height)
            result = resetResult(max, i, result)
            let currentIndex = height[max] > height[maxIndex] ? max : maxIndex
            maxIndex = height[currentIndex] > height[i] ? currentIndex : i
            result.push(container)
        } else {
            result.push(0)
        }
        if (height[maxIndex] <= height[i]) maxIndex = i
    }
    return getMaxRes(maxIndex, i, result)
};

function getExtr(x, y, height) {
    let sum = 0
    for (let i = x + 1; i < y; i++) {
        sum += height[i]
    }
    return sum
}

function getRightMaxIndex (maxIndex, i, height, result) {
    while (height[maxIndex] > height[i - 1]) {
        if (maxIndex + 1 < i && height[maxIndex + 1] > height[i - 1]) {
            maxIndex++
        } else {
            break
        }
        // containerExtr = getExtr(maxIndex, i, height)
        // container = (i - maxIndex - 1) * Math.min(height[i], height[maxIndex]) - containerExtr
    }
    let containerExtr = getExtr(maxIndex, i, height)
    let container = (i - maxIndex - 1) * Math.min(height[i], height[maxIndex]) - containerExtr
    return {
        max: maxIndex,
        container
    }
}

function getMaxRes (maxIndex, currentIndex, result) {
    let sum = 0
    for(let i = 0; i < result.length; i++) {
        sum += result[i]
    }
    return sum
}

function resetResult (maxIndex, currentIndex, result) {
    for(let i = maxIndex + 1; i < currentIndex; i++) {
        result[i] = 0
    }
    return result
}

const height =  [0,1,0,2,1,0,1,3,2,1,2,1] // 6
// const height =  [0,1,0,2,1,0,1,4,3,4,3, 3, 0,1] // 7
// const height = [5,2,1,2,1,5]
// const height = [5,2,1,2,1,5, 0, 1]
// const height = [6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3] // 83
// const height = [9,8,2,6] // 4
// const height =[8,2,8,9,0,1,7,7,9] // 27
const res = trap(height)
console.log(res)
