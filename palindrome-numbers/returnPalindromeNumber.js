/**
 * 
 * 2020.07.06 - Robin.io brainteaser
 * Palindromes, this time with numbers
 */


const  isPalindrome = (num) => {
    if (num % 10 === 0) {
        return num === 0
    }

    var rev = 0;

    while (rev < num) {
        rev = rev * 10 + num % 10;
        // have to ignore fractional piece of the number.
        num = Math.floor(num / 10);
        
    }
    
    return rev === num || Math.floor(rev / 10) === num
}

  const returnPalindrome = (input) => {


// is the given number a palindrome? if yes, then return that number.
    if (isPalindrome(input)) {
        return input;
    }

// we're asked to return the next lowest palindrome.  
// so decrement the given input until we find a palindrome.
    let alternateNumber = input -1;

    while (!isPalindrome(alternateNumber)) {

        alternateNumber--;
    }

    return alternateNumber;


  }


  
  
  console.log(returnPalindrome(100));

  console.log(returnPalindrome(1000));

  console.log(returnPalindrome(10000));

console.log(returnPalindrome(100000));

console.log(returnPalindrome(3322));