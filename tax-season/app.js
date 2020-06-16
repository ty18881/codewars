/**
 * 
 * Robin.io daily challenge
 * Hip hip hooray! It’s tax season! Your CPA has requested that you provide your tax amounts in cents this year. Rather than using pen and paper, wouldn’t it be faster for you to write a function that accepts a dollar amount and a tax percentage and returns the taxed amount in cents?
 */

const calcTaxAmount = (dollars, percentTax) => {
    return dollars * (percentTax / 100) * 100;
  };
  
  // console.log(`Dollars: $100, Tax Rate: 10% results in Tax Amount:  ${calcTaxAmount(100, 10)} Cents`);
  
  console.log(
    `Dollars: $1,000,000, Tax Rate: 20% results in Tax Amount:  ${calcTaxAmount(
      1000000,
      20
    )} Cents`
  );