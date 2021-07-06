/**
 * Interview Cake practice 
 * Create a world cloud based upon given input string
 * Simplistic solution - ignores case of all words; treats hypentated words as individual words.
 */

function makeWordCloud(inputString){

    let wordMap = new Map();

    // prep the input - make all lowercase.

    console.log(`Before transformation: ${inputString}`);
    inputString = inputString.toLowerCase();

    console.log(`Revised Input ${inputString}`);
    // strip out punctuation

    inputString = inputString.replace(/[^\w\s]/gi, '');

    let inputArray = inputString.split(' ');

    for (let i=0; i < inputArray.length; i++){

        if (wordMap.has(inputArray[i])) {
            let count = wordMap.get(inputArray[i]);

            wordMap.set(inputArray[i], count+=1);


        } else {
            wordMap.set(inputArray[i], 1);
        }
    }

    return wordMap;
}

console.log(makeWordCloud("hello hello world"));

console.log(makeWordCloud("Hello, hello world world!"));