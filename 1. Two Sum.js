var twoSum = function(nums, target) {
    for(var i=0; i<nums.length; i++){
        for(var o=0; o<nums.length; o++){
            if(nums[i]+nums[o] === target && i!=o){
                return [i,o];
            }
        }
    }
};

