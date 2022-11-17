/* const palindromes = function (sentence) {
    sentence= sentence.replace(/[^A-Za-z]/g, '').toLowerCase(); 
    // removes punctuation (non alphabet characters), then make them all uniform lowercase
    
    reversedSentence = (sentence.split("").reverse().join("")); 
    //create a comparison string that is the reverse of original

    return sentence===reversedSentence;
}; */

// made it prettier
const palindromes = (sentence) => {
    sentence= sentence.replace(/[^A-Za-z]/g, '').toLowerCase(); 
    return sentence === (sentence.split("").reverse().join(""));
};



// Do not edit below this line
module.exports = palindromes;
