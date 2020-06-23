// given an input string, including punctuation and spaces, 
// print out the reversed version of the string.
// don't use the built in reverse method

const reverseTheString = (input) => {
    
    let inputArray = input.split('');

    // I'm going to set up a couple of pointers 
    // and try to reverse the array in place.

    let leftIndex = 0;

    let rightIndex = inputArray.length - 1;


    while (leftIndex < rightIndex) {

        let temp = inputArray[leftIndex];

        inputArray[leftIndex] = inputArray[rightIndex];
        inputArray[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }

    return inputArray.join('');

}

let myString = '.uoy fo lla naht ynapmoc retteb a ekam nac I .ynapmoc siht ta OEC eht eb ot evresed I';
// console.log(reverseTheString('aeiou'));

console.log(reverseTheString(myString));
