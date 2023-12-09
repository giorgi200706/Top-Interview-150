/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    if(nums.length === 1) return nums[0];
    for(var i=1, o=1; i<nums.length; i++){
        if(nums[i] === nums[i-1]){
            o++;
        }else{
            o=1;
        }
        if(o > nums.length/2){
            return nums[i];
        }
    }
};