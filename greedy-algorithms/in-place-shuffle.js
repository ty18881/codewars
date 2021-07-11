/**
 * Learning the Fisher-Yates shuffle
 * In place uniform shuffle of the contents of an array.
 * UNIFORM = each item has the same probability of ending up in each spot of the final array.
 * e.g. choose the landing spot for each item at random, choose the item to move at random as well.
 */

function getRandom(floor, ceiling){

   floor = Math.ceil(floor);
   ceiling = Math.floor(ceiling);

   return Math.floor( Math.random() * (ceiling - floor +1) + floor);
}

function inPlaceShuffle(inputArray){

    // cannot shuffle an empty array or an array with a single element.
    if (inputArray.length <= 1 ) return;

    // iterate over the input array.

    for (let indexWeAreChoosingFor = 0; indexWeAreChoosingFor < inputArray.length - 1; indexWeAreChoosingFor++ ){
        
        // select random, not previously placed item to move.
        // anything below indexWeAreChoosingFor has already been shuffled.

        const randomIndex = getRandom(indexWeAreChoosingFor, inputArray.length-1);

        if (randomIndex != indexWeAreChoosingFor){
            const valueAtIndexWeChoseFor = inputArray[indexWeAreChoosingFor];

            inputArray[indexWeAreChoosingFor] = inputArray[randomIndex];

            inputArray[randomIndex] = valueAtIndexWeChoseFor;
        }


    }


}