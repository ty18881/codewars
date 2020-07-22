/**
 * Robin.io 2020.07.22
 * Implement a bubble sort and explain situations when
 * the algorithm is least suitable for sorting and why.
 * 
 * This algorithm isn't optimal because it requires multiple
 * iterations through the input collection to confirm it is sorted.
 * Worst case time complexity is O to the n squared.
 */

 const bubbleSort = (input) => {

    let smallestPos = input.length-1;
    let tempVal = 0;

    while (smallestPos > 0){

        for (let i=0; i < input.length; i++){
            if (input[i] > input[i+1]){
                tempVal = input[i];
                input[i] = input[i+1];
                input[i+1] = tempVal;
                smallestPos = i;
            }   
        }

    }
    return input;
 }


 console.log(bubbleSort([2,5,3,1,4,7]));