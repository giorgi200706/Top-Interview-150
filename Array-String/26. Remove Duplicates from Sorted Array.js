/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums.sort((a, b) => a - b);
    for(var i=1; i<nums.length; i++){
        if(nums[i] === nums[i-1]){
            nums.splice(i, 1);
            i--;
        }
    }
};