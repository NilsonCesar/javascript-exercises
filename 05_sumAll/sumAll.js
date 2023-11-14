const sumAll = function(a, b) {
    if (typeof a == "number" && typeof b == "number" && a >= 0 && b >= 0) {
        return parseInt((Math.abs(b - a) + 1) * (a + b)/ 2);
    }
    return "ERROR";
};
sumAll(123, 1);
// Do not edit below this line
module.exports = sumAll;
