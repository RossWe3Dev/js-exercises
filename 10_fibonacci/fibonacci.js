const fibonacci = function (x) {
    x = parseInt(x);
    if (x < 0) return "OOPS";
    let fibArr = [0, 1];
    for (i = 2; i <= x; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    };
    return fibArr[x];
};

// Do not edit below this line
module.exports = fibonacci;
