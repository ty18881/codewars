/**
 * Robin.io 2020.07.12
 * Input:  four strings
 * Output:  true if all four items match, False otherwise.
 */



 // create a callback function for use with Array.every

 
 const jackpot = (spin) => {
  
    // return spin.every( (element, index, array) => element === array[0]);

    // alternate method => use a set
    //Set.size returns the number of unique elements in the set.

    return new Set(spin).size === 1;

 }


 console.log(jackpot(['@', '@', '#', '@']));

console.log(jackpot(['#', '@', '@', '@']));

console.log(jackpot(['@', '@', '@', '@']));
 
 
//  console.log(jackpot(['#', '#', '#', '#']));

