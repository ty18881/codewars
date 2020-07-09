/**
 * Robin.io
 * 2020.07.08 - Create a pyramid with the
 * number of levels specified by the given positive number
 */

const buildPyramid = (levels) => {

    // console.log(`LEVELS current value = ${levels}`);
    let printOut = '';

    let looper = (2* levels)-1;

    // base case
    if (levels === 1) {
        printOut=' # ';
    } else {

        // recursive cases.
      buildPyramid(levels - 1);
       // as we go back up the memory stack, how to determine the number of characters to print out?
       // print (2 * levels - 1) characters to the screen.


       for (let i=0; i < looper; i++ ) {
           printOut+= '#';
       }

       // now we have to recognize rows where we need to add leading and trailing spaces.
       // this is where I got stuck.
     
    }
   
    console.log(printOut);
    
  };


  buildPyramid(5);
