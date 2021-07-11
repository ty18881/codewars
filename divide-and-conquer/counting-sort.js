/**
 * COUNTING SORT
 * sort an unsorted collection of values.
 * Time complexity goal:  < O(nlnn)
 * 
 * Actual time complexity:  O(n)
 * Actual space complexity: O(n)
 */

function sortScores(scoreList, maxScore){

    const scoreCounts = new Array(maxScore + 1).fill(0);
    

    // capture frequency for each score in our original collection.
    scoreList.forEach(unsortedScore => {
        scoreCounts[unsortedScore]++;
    });

    const sortedScores = [];

    for (let score = maxScore; score >=0; score--){

        const count = scoreCounts[score];

        // push the score onto the final array.  One time for each occurrence in our scoreCount collection.

        for (let frequency = 0; frequency < count; frequency++){
            sortedScores.push(score);
        }
    }
    return sortedScores;

}


// max score must be larger than the largest number in our collection or this won't work.
console.log(sortScores([37,89,41,65,91,53],100));

