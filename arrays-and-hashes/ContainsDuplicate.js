// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let nums = [1,2,3,1]

var containsDuplicate = function(nums) {
    // store values in hashtable
    const obj = {};
    nums = nums.sort()

    for (let i = 0; i <nums.length; i++) {
        if (obj[nums[i]]) {
            return true
        }
        obj[nums[i]] = true;

    }
    return false;

    
    
};

console.log(containsDuplicate(nums))