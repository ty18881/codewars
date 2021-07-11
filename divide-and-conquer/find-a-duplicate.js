/**
 * Searching for the first duplicate in a collection of items.
 * Values Range from  1..n
 * Number of items in the collection: n
 * if the number of items in a partition > n => that partition most likely contains a duplicate.
 * 
 */


 function findRepeat(numbers) {

    let floor = 1;
    let ceiling = numbers.length - 1;
  
    while (floor < ceiling) {
  
      // Divide our range 1..n into an upper range and lower range
      // (such that they don't overlap)
      // lower range is floor..midpoint
      // upper range is midpoint+1..ceiling
      const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
      const lowerRangeFloor = floor;
      const lowerRangeCeiling = midpoint;
      const upperRangeFloor = midpoint + 1;
      const upperRangeCeiling = ceiling;
  
      const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;
  
      // Count number of items in lower range
      let itemsInLowerRange = 0;
      numbers.forEach(item => {
  
        // Is it in the lower range?

        // this piece originally confused me.  I assumed we were comparing INDICES.
        // we are verifying the value at the INDEX appears in a particular virtual partition of the input array.
        if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
          itemsInLowerRange += 1;
        }
      });
  
      if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
  
        // There must be a duplicate in the lower range
        // so use the same approach iteratively on that range
        floor = lowerRangeFloor;
        ceiling = lowerRangeCeiling;
      } else {
  
        // There must be a duplicate in the upper range
        // so use the same approach iteratively on that range
        floor = upperRangeFloor;
        ceiling = upperRangeCeiling;
      }
    }
  
    // Floor and ceiling have converged
    // We found a number that repeats!
    return floor;
  }
  
// 1..n => 1..6 inclusive
// therefore seven or more numbers in the array.
  console.log(findRepeat([1,2,3,4,5,6,3,2,6,7,7]));
