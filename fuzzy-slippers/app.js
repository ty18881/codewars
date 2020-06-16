// Assumptions:
// Friend looks after 10 dogs, 10 cats and 10 chickens
// Dogs: 4 feet
// Cats: 4 feet
// Chickens: 2 feet

const calcNumSlippers = (numDogs, numCats, numChickens) => {
    let numDogSlippers = numDogs * 4;
    let numCatSlippers = numCats * 4;
    let numChickenSlippers = numChickens * 2;
  
    return numDogSlippers + numCatSlippers + numChickenSlippers;
  };
  
  //let totalSlippers = calcNumSlippers(10, 10, 10);
  
  //console.log(`Total Slippers Required = ${totalSlippers}`);
  
  let totalSlippers = calcNumSlippers(1, 1, 0);
  
  console.log(`Total Slippers Required = ${totalSlippers}`);
  