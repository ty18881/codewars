/**
 * Modified binary search
 * to identify the index at which the item is the first alphabetically.
 * VARIATION:  What if the array is not rotated?  
 */

function findRotationPoint( words ){

    const firstWord = words[0];

    let floorIndex = 0;

    let ceilingIndex = words.length - 1;

    while (floorIndex < ceilingIndex) {

        // similar to binary search, partition the array

        const guessIndex = Math.floor( floorIndex + ((ceilingIndex - floorIndex) / 2));

        if ( words[guessIndex] >= firstWord){

            // move boundaries of your partition to the right

            floorIndex = guessIndex;
        } else {

            // move partition boundary to the left

            ceilingIndex = guessIndex;
        }

        if (floorIndex + 1 === ceilingIndex){
            // between floor and ceiling is when the array flips to the beginning of the alphabet

            // therefore, whatever is at the ceiling index is alphabetically first.
            break;
        }
    }

    return ceilingIndex;
}

console.log(findRotationPoint(['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']));

console.log(findRotationPoint([5,6,7,8,9,10,0,1,2,3,4]));