// mask all but the last four numbers of the input provided
// cannot assume all numbers are multiples of four
// FREX AMEX numbers are 15 digits

const maskDigits = (cardNum) => {

    let cardString = cardNum.toString();

// learned the Look Ahead assertion today.
// below matches digits only if they are immediately followed by 4 digits.
// the 4 digits are not returned in the match results.
    return cardString.replace(/\d(?=\d{4})/g, '*');

    // replace d with w to mask alpha characters.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
}

console.log(maskDigits(88888888));

console.log(maskDigits(121212121212));

console.log(maskDigits(151515151515151));
