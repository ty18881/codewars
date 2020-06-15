// Strip out spaces and punctuation from each string
// convert both strings to all lowercase
// if str1.length != str2.length => return false
// else sort each string then compare their sorted versions.

const areAnagrams = (str1, str2) => {
    str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  
    console.log(`String 1 Altered = ${str1}`);
  
    str2 = str2.replace(/[^\w]/g, "").toLowerCase();
    console.log(`String 2 Altered = ${str2}`);
  
    if (str1.length != str2.length) {
      return false;
    }
  
    // split into an array, sort the array then join back together into a string.
    let newStr1 = str1.split("").sort().join("");
  
    let newStr2 = str2.split("").sort().join("");
  
    return newStr1 === newStr2;
  };
  
  //console.log(areAnagrams('listen!', 'silent'));
  
  //console.log(areAnagrams('Triangle', 'INTEGRAL'));
  
  //console.log(areAnagrams('debit cards', 'bad credit'));
  
  //console.log(areAnagrams('debit card', 'bad credit'));
  
  console.log(areAnagrams("debit cards", "bad"));
  