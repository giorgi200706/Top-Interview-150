/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i=2; i<nums.length; i++){
        if(nums[i] === nums[i-1] && nums[i] === nums[i-2]){
            nums.splice(i, 1);
            i--;
        }
    }
};