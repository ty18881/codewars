/** 
 * Robin.io challenge
 * 2020.07.11
 * Input:  10 digit integer
 * Output:  (123) 456-7890 i.e. US phone number formatting.
 */


 const formatPhoneNumber = (input) => {

    // ASSUMPTION:  Convert to US Phone Number format without country codes.
     // convert the input integer to a string.
     // then match groups of digits.

     // group one gets surrounded by parentheses
     // group two is followed by a dash
     

     let output = input.toString().match(/^(\d{3})(\d{3})(\d{4})$/);

     return '(' + output[1] + ') ' + output[2] + '-' + output[3];
 }


 
 console.log(formatPhoneNumber(1238675309));