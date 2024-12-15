const reverseString = function(string) {
    let strArr = [...string];
    strArr = strArr.reverse();
    reversedString = '';
    for (let i = 0; i < string.length; i++) {
        reversedString = reversedString + strArr[i];
    };

    return reversedString;
    
};

// Do not edit below this line
module.exports = reverseString;
