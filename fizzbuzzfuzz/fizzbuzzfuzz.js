/**
 * 2020.07.07 - FizzBuzzFuzz exercise from Robin.io
 * For the numbers between 1 and 150, inclusive
 * Divisible by 3, 5 and 7 => FizzBuzzFuzz
 * Divisible by 3 and 7 => FizzFuzz
 * Divisible by 5 and 7 => BuzzFuzz
 * Divisible by 7 => Fuzz
 * Divisible by 5 => Buzz
 * Divisible by 3 => Fizz
 * 
 */

const fizzBuzzFuzz = () => {
    for (let i=1; i<=150; i++){

        // most specific case must be evaluated first
    
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0){
            console.log('FizzBuzzFuzz');
        } else if ( i % 3 === 0 && i % 7 === 0 ){
            console.log('FizzFuzz');
        } else if ( i % 5 === 0 && i % 7 === 0){
            console.log('BuzzFuzz');
        } else if ( i % 7 === 0) {
            console.log('Fuzz');
        } else if ( i % 5 === 0) {
            console.log('Buzz');
        } else if ( i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }

      
     }

}
 

fizzBuzzFuzz();