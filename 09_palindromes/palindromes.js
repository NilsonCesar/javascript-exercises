const palindromes = function (str) {
    strFormated = (Array.from(str)).filter(c => ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('1' <= c && c <= '9'));
    strFormated = (strFormated.reduce((str, a) => str + a, ''));
    strFormated = strFormated.toLowerCase();

    for(let i = 0; i < strFormated.length; i++) {
        if(strFormated[i] != strFormated[strFormated.length - i -1]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;