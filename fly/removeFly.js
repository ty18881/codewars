/**
 * Robin.io - 2020.07.21 - remove f, l, y from the given input string
 * 
 */

 const removeFly = (input) => {

     if (input.match(/[f,l,y]/gi)) {
         return input.replace(/[f,l,y]/gi,'');
     }

     return 'No flies Here!'
    
 }



console.log(removeFly('one two three'));

console.log(removeFly('flyflyfflllgoflyyyyflynefffff'));