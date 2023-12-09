/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var num = 0;
    const roman_numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    for(var i=0; i<s.length; i++){
        if(roman_numerals[s[i]] < roman_numerals[s[i+1]]){
            num = num - roman_numerals[s[i]];
        }else{
            num = num + roman_numerals[s[i]];
        }
    }
    return num;
};
console.log(romanToInt())