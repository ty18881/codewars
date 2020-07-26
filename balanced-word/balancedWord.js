/** 
 * Robin.io 2020.07.25
 * Determine if the given string is balanced.
 * Balanced means the sum of the characters on the left hand side
 * equals the sum of the characters on the right hand side.
 * if the word has an odd number of letters, ignore the middle letter.
 * Points are based upon the letter's position in the English alphabet
 */

 const isBalancedWord = (theString) => {
     const alphabet = {
         'a': 1,
         'b': 2,
         'c': 3,
         'd': 4,
         'e': 5,
         'f': 6,
         'g': 7,
         'h': 8,
         'i': 9,
         'j': 10,
         'k': 11,
         'l': 12,
         'm': 13,
         'n': 14,
         'o': 15,
         'p': 16,
         'q': 17,
         'r': 18,
         's': 19,
         't': 20,
         'u': 21,
         'v': 22,
         'w': 23,
         'x': 24,
         'y': 25,
         'z': 26

     }

     let lhs = 0;

     let rhs = 0;

     if (theString.length % 2 === 0){

        for (let i=0; i< theString.length / 2; i++){
            lhs += alphabet[theString.charAt(i)];
        }

        for (let j=theString.length / 2; j< theString.length; j++){
            rhs += alphabet[theString.charAt(j)];
        }

        return lhs === rhs;
     }
     // if we get here, the string has an odd number of characters.

     let midpoint = Math.floor(theString.length / 2);
     console.log(`Odd Number:  Midpoint = ${midpoint}`);

     for (let i=0; i< midpoint; i++){
         lhs+= alphabet[theString.charAt(i)];
         
     }
     console.log(`LHS = ${lhs}`);
     for (let j=midpoint+1; j< theString.length; j++){
        rhs+= alphabet[theString.charAt(j)];
        
    }
    console.log(`RHS = ${rhs}`);

     return lhs === rhs;
 }

 console.log(isBalancedWord('abcd'));

 console.log(isBalancedWord('mum'));

 console.log(isBalancedWord('abba'));

 console.log(isBalancedWord('split'));
 console.log(isBalancedWord('spit'));

 console.log(isBalancedWord('spirit'));
 console.log(isBalancedWord('sprint'));
