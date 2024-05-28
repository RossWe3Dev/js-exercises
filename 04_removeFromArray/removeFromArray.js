const removeFromArray = function (arr, ...argsToRemove) {

    for (const argument of argsToRemove) {
        arr = arr.filter((arrElement) => arrElement !== argument);
    }
    return arr;

}


// Do not edit below this line
module.exports = removeFromArray;
