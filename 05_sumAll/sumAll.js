const sumAll = function(int1, int2) {
    if ((typeof int1 !== "number" || int1 < 0 || !Number.isInteger(int1)) || 
    (typeof int2 !== "number" || int2 < 0 || !Number.isInteger(int2))) {
        return "ERROR";
    }

    if (int1 > int2) {
        let temp = int1;
        int1 = int2
        int2 = temp
    }

    let sum = 0;
    for (let i = int1; i <= int2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
