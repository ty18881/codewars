function binarySearch(target, nums) {
    // floorIndex and ceilingIndex are the boundaries 
    // around where our target number may appear in the collection.

    let floorIndex = -1;

    let ceilingIndex = nums.length;

    while ( floorIndex + 1 < ceilingIndex){

        // this step partitions the array into two sections

        const distance = ceilingIndex - floorIndex;

        const halfDistance = Math.floor( distance / 2);

        const guessIndex = floorIndex + halfDistance;

        const guessValue = nums[guessIndex];

        if (guessValue == target){
            return true;
        }

        if (guessValue > target){
            // search the left side of the collection

            ceilingIndex = guessIndex;
        } else {
            
            // search the right side of the collection.

            floorIndex = guessIndex;
        }
    }

    return false;
}

console.log(binarySearch(5, [1,3,5,7,9,11]));

console.log(binarySearch(5, [1,3,7,9,11]));