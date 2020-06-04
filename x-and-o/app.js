/**
 * Codewars 2020.06.04
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

 const XO = (str) => {

    
    let input = str.toLowerCase();

    let inputArray = input.split("");

    let inputLength = inputArray.length;

    // let xCount = input.split('x').length;
    let xCount = 0;

    // let oCount = input.split('o').length;
    let oCount = 0;

    for (let i=0; i < inputLength; i++) {
        switch (inputArray[i]){
            case 'x':
                xCount+=1;
                break;
            case 'o':
                oCount+=1;
                break;
            default:
                // otherCount+=1;
        }
    }

    return xCount === oCount;
    
 }

//  console.log(XO('ooxx'));

//  console.log(XO("zpzpzpp"));

//  console.log(XO("zzoo"));

 console.log(XO(''));

 console.log(XO('xyzoyz'))