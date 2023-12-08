/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    var restult = "";
    for(var i=0; i<strs[0].length; i++){
        var repeat = true;
        for(var o=0; o<strs.length; o++){ 
            if(strs[o+1] !== undefined && strs[o][i] !== strs[o+1][i]){
                repeat = false;
                return(restult);
            }
            if(repeat === true && o+1 === strs.length){
                restult = restult + strs[o][i];
            }
        }
    }
    return(restult)
};