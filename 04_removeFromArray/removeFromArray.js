const removeFromArray = function(array) {
    for(let arg = 1; arg < arguments.length; arg++) 
        for (let i = 0; i < array.length; i++) 
            if (array[i] === arguments[arg]) 
                array.splice(i, 1);
    return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
