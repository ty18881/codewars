/**
 * Robin.io 2020.07.13
 * Input:  800-YOU-RANG
 * Output: 800 - 968 - 7264
 * 
 */

 const keyPad = {
     0: 0,
     1: 1,
     A: 2,
     B: 2,
     C: 2,
     D: 3,
     E: 3,
     F: 3,
     G: 4,
     H: 4,
     I: 4,
     J: 5,
     K: 5,
     L: 5,
     M: 6,
     N: 7,
     O: 7,
     P: 7,
     Q: 7,
     R: 7,
     S: 7,
     T: 8,
     U: 8,
     V: 8,
     W: 9,
     X: 9,
     Y: 9,
     Z: 9,
     2: 2,
     3: 3,
     4: 4,
     5: 5,
     6: 6,
     7: 7,
     8: 8,
     9: 9,
     '-': '-',
     '(': '(',
     ')': ')'
 }


 const formatPhone = (input) => {

     //Option:  Iterate over the string
     // mapping each charAt(i) to it's corresponding
     // value in keyPad.
     // be sure to avoid replacing any numbers in the provided input.

     let length = input.length;
     let translated ='';

     for (let i=0; i< length; i++){
         
        // translated = translated + keyPad[input.charAt(i)].toString();
        translated = translated + keyPad[input.charAt(i)];
     }

     return translated;

 }

 console.log(formatPhone('1-800-YOU-TUBE'));