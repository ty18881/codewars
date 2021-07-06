function highestProductOf3(arrayOfInts){

    if (arrayOfInts.length < 3){
        throw new Error('Must have at least three items');
    }

    // setting up values before starting to walk through the array of values.

    let highest = Math.max( arrayOfInts[0], arrayOfInts[1]);

    let lowest = Math.min( arrayOfInts[0], arrayOfInts[1]);


    let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

    // this helps if any numbers in the collection are negative.
    let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

    let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

    for (let i = 2; i < arrayOfInts.length; i++){

        const current = arrayOfInts[i];

        highestProductOf3 = Math.max(
            highestProductOf3,
            current * highestProductOf2,
            current * lowestProductOf2
        );


        // check for a new highest and lowest product of two numbers

        highestProductOf2 = Math.max(
            highestProductOf2,
            current * highest,
            current * lowest
        );

        lowestProductOf2 = Math.min(
            lowestProductOf2,
            current * highest,
            current * lowest
        );

        // check for a new lowest and highest

        highest = Math.max(highest, current);

        lowest = Math.min(lowest, current);

    }

    return highestProductOf3;
}

console.log(highestProductOf3([1,5,3,4,2,2]));

//console.log(highestProductOf3([1,5]));