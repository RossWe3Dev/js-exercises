const removeFromArray = function (arr, ...toRemove) {

    let index1 = [];
    for (const argument of toRemove) {
        index1 = arr.indexOf(argument);
        arr.splice(index1, 1);
    }
    return arr;

    /* const index = arr.indexOf(toRemove);     //! same arr
    arr.splice(index, 1);
    return arr; */

    /* const splicedArr = arr.toSpliced(index, 1);      //! new arr with toSpliced()
    return splicedArr; */
};

// Do not edit below this line
module.exports = removeFromArray;


/** Suggestion from Reddit Post
 * 
 * const indexOfAll = (str, target) => Array.from(str)
  .map((char, i) => char === target ? i : -1)
  .filter(i => i !== -1);

indexOfAll('hello', 'l');  // [2, 3]

For loops are rarely the best way to process data. Occasionally I’ll use a for...of if I’m off down some edge case,
but a combination of array methods (like Array.from, map, and filter here) is usually more readable, less error prone,
and easier to both read and write.
 */