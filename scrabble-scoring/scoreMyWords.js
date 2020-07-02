// input:  array of words and score for each letter
// output:  array of words with the maximum score



const findMaxOptions = (theWords) => {

    theScores = {
        'A': 1,
        'B': 3,
        'C': 3
    };

    let currentScore = 0;

    let currentMaxScore = 0;

    let testWord = 'ABC';

    for (let i=0; i < testWord.length; i++){
        
        currentScore+= theScores[testWord.charAt(i)];
    }

    
    return currentScore;

}

console.log(findMaxOptions(['queen', 'water','zulu']));

