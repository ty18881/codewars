// Founders - 2020.06.19
// Mashup of the first letter of each founder's name
// alphabetized and all caps

const makeName = (nameArray) => {

    let newArray = nameArray.map( name => 
        name.toUpperCase().slice(0,1)
    );

    return newArray.sort().join('');
}

console.log(makeName(['Elon', 'Cecilia', 'Daniel', 'Tara']));
// console.log(makeName(['Tara', 'Tara', 'Tara', 'Tara']));