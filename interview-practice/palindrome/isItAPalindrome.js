/**
 * 
 * Interview Cake preparation question.
 * Write an efficient function that checks whether any permutation
 * of an input string is a palindrome.
 * EXAMPLE GIVEN:  civic => true,  ivicc => true
 * 
 * LOGIC:  track the number of characters that appear an odd number of t
 * times in the input string.  If you have more than one => string is NOT a palindrome
 * 
 * DATA STRUCTURE:  Object/Hash-like structure => these structures optimize for time
 * when we are working with multiple items or have to compare multiple items.
 * They have O(1) time complexity for lookups.
 */

function hasPalindromePermutation(theString) {


  // adapting this to be friendly to strings with punctuation, spaces and capital letters.

  let modifiedString = theString.toLowerCase().replace(/\s+|[^\w]/g, '');

  
    // Track characters we've seen an odd number of times
    const unpairedCharacters = new Set();
  
    for (let char of modifiedString) {
      if (unpairedCharacters.has(char)) {
        unpairedCharacters.delete(char);
      } else {
        unpairedCharacters.add(char);
      }
    }
  
    // The string has a palindrome permutation if it
    // has one or zero characters without a pair
    return unpairedCharacters.size <= 1;
  }

  console.log(hasPalindromePermutation("Was it a cat I saw"));

  console.log(hasPalindromePermutation("Civic"));

