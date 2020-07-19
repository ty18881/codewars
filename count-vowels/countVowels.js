/**
 * Robin.io 2020.07.19
 * Count the number of vowels in the given string
 */


 const countVowels = (inputString) => {

    let vowels = inputString.match(/[a,e,i,o,u]/gi);

    return vowels.length;
 }

// console.log(countVowels('AbcdefghijklmnopqrstUvwxyz'));

 console.log(countVowels('Supercalifragilisticexpialidocious'));