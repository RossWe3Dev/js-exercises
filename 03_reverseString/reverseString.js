const reverseString = function (string) {
    const lettersArr = string.split("");
    lettersArr.reverse();
    let reverseString;
    reverseString = lettersArr.join("");
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
