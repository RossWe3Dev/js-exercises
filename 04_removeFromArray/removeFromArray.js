const removeFromArray = function (arr, toRemove) {
    const index = arr.indexOf(toRemove);
    arr.splice(index, 1);
    return arr;

    /* const splicedArr = arr.toSpliced(index, 1);
    return splicedArr; */
};

// Do not edit below this line
module.exports = removeFromArray;
