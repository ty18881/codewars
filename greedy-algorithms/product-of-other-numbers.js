function getProductsOfAllOtherIntsExceptAtIndex(intArray){

    if (intArray.length < 2) {
        throw new Error('Need more than one number to calculate a product');
    }


    const productOfAllIntsExceptAtIndex = [];

    // calculate product of all integers before the index in question.

    let productSoFar = 1;

    for (let i=0; i < intArray.length; i++){

        productOfAllIntsExceptAtIndex[i] = productSoFar;

        productSoFar = productSoFar * intArray[i];


    }
    
        // calculate the product of the integers after the index in question.

        productSoFar = 1;

        for (let j = intArray.length-1; j >=0; j--){

            productOfAllIntsExceptAtIndex[j] = productOfAllIntsExceptAtIndex[j] * productSoFar;

            productSoFar = productSoFar * intArray[j];
        }

    return productOfAllIntsExceptAtIndex;
}

console.log(getProductsOfAllOtherIntsExceptAtIndex([1,2,3,4]));