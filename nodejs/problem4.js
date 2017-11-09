/**
 * Created by echaoo on 2017/10/31.
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2).sort((a, b) => a - b);
    if (nums.length % 2 === 0) {
        return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2
    } else {
        return nums[parseInt(nums.length / 2)]
    }
};

var nums1 = [1];
var nums2 = [2,3,4,5,6,7,8,9,10];

console.log(findMedianSortedArrays(nums1, nums2))