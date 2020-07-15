/**
 * Robin.io 2020.07.14
 * Calculate the number of calendar days
 * between two given dates
 */


 function daysToFreedom (date1, date2) {
     let timeDifference = date2.getTime() - date1.getTime();

     let dayDifference = timeDifference/ (1000 * 3600 *24);

     return dayDifference;
 }


 let date1 = new Date('03/17/2020');

//  let date2 = new Date('03/31/2020');

let date2 = new Date('09/17/2020');
 console.log(daysToFreedom(date1,date2));