const currentYear = new Date().getFullYear();
getAge = (x) => (x.yearOfDeath || currentYear) - x.yearOfBirth;

const findTheOldest = function (arr) {
    arr.sort((person, nextPerson) => getAge(nextPerson) - getAge(person));
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
