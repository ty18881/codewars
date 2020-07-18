/** 
 * 2020.07.18 - Robin.io challenge
 * INPUT:  X
 * OUTPUT:  The multiplication tables from 1 to X
 * ASSUMPTION:  1*1 => 1*X => X*X
 */

 const multiply = (x) => {

    // brute force method is nested loops.

    for (let i=1; i<=x; i++){
        for (let j=1; j<=x; j++){
            console.log(`${i} * ${j} =  `, i*j);
        }
        
    }
 }

 
 multiply(10);