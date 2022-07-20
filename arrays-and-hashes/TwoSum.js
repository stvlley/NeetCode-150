// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

let nums = [2,7,11,15]
let target = 9

var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target-nums[i]], i];
        } else {
            map[nums[i]] = i;
        }
    }
};

console.log(twoSum(nums, target))