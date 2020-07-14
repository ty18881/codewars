// given an input array
// print out the reversed version of the array.
// don't use the built in reverse method

const reverseArray = (inputArray) => {
    

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

   return inputArray;

}


console.log(reverseArray(['a', 'e', 'i', 'o', 'u']));
