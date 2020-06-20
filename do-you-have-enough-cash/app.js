// two inputs
// 1.  the amount you are expected to pay for your purchase in dollars.
// 2. an array representing the number of each US coin you have on hand
// [1,2,3,4]:  1 = number of pennies, 2 = number of nickels, 3 = number of dimes
// 4 = number of quarters

// output:  if sum(coins) >= amountDue => TRUE else FALSE

// my strategy:  convert amount due to cents, remove any decimals from that result.
// calculate value of the change.
// compare value of change to amount due.

const doIHaveEnough = (bill, change) => {


    // we only want to keep the integer portion of the product.  This
    // trims off the decimal and numbers to the right of it.

    let myBill = Math.trunc(bill * 100);

    // let quarters = change[3] * 25;

    // let dimes = change[2] * 10;

    // let nickels = change[1] *5;

    // let pennies = change[0] * 1;

    // from the problem statement:  change is provided [pennies, nickels, dimes, quarters]
    let sumChange = change[3] *25 + change[2] *10 + change[1] *5 + change[0] * 1;

    return myBill <= sumChange ? true : false;

}

console.log(doIHaveEnough(2.45, [0,1,4,8]));

console.log(doIHaveEnough(8.45, [0,1,4,8]));

console.log(doIHaveEnough(2.50, [0,1,4,8]));

console.log(doIHaveEnough(2.46, [0,1,4,8]));
