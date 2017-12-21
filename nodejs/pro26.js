/**
 * Created by echaoo on 2017/12/21.
 */
function removeDuplicates(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
}
let arr = [1, 1, 1]

console.log(removeDuplicates(arr))
console.log(arr)