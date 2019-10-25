/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    backTrack(nums, i,[nums[i]], result)
  }
  return result
};

function backTrack (nums, index, tempPath, result) {
  if (index > nums.length) {
    return
  }
  if (tempPath.length === nums.length) {
    result.push(tempPath)
    return
  }
  for (let i = 0; i < nums.length; i++) {
    const newValue =  (tempPath.indexOf(nums[i]) > -1) ? null : nums[i]
    if(newValue !== null) {
      const newPath = [...tempPath, newValue]
      backTrack(nums, i, newPath, result)
    }
  }
}

const a = permute([0, 1])
console.log(a)
