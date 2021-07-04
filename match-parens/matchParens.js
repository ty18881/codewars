function findClosingParen(inputString, openParenIndex) {

    let openNestedParens = 0;

    for (let position = openParenIndex +1; position < inputString.length; position++){
        const char = inputString[position];

        if ( char === "(") {
            openNestedParens +=1;
        } else if (char === ")"){
            if (openNestedParens === 0) {
                return position;
            }
            openNestedParens -=1;
        }
    }

    throw new Error("No closing parenthesis");
}

//console.log(findClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10));

console.log(findClosingParen("Sometimes (I mean always, typically forget to match", 11));