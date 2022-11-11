const removeFromArray = function (inputArray, condition) {
    for (let i in inputArray) {
        if (inputArray[i] == condition) {
            inputArray.splice(i, 1);
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
