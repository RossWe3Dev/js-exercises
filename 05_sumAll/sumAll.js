const sumAll = function (lower, higher) {
    let sum = 0;
    if (!Number.isInteger(lower) || !Number.isInteger(higher)) return 'ERROR';
    if (lower < 0 || higher < 0) return 'ERROR';
    if (lower < higher) {
        for (i = lower; i <= higher; i++) {
            sum = sum + i;
        }
    } else {
        for (i = higher; i <= lower; i++) {
            sum = sum + i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
