const findTheOldest = function(arr) {
    let ages = arr.map(people => people.yearOfDeath - people.yearOfBirth || 2023 - people.yearOfBirth);
    let oldestAge = -1;
    let oldest = '';

    for(let i = 0; i < ages.length; i++) {
        if(oldestAge < ages[i]) {
            oldestAge = ages[i];
            oldest = arr[i];
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;