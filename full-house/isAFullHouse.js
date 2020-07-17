/**
 * Given an array of cards, determine if user has a full house
 * three of a kind and one pair
 * LOGIC:  Set holds only one of each value.
 * Full house consists of two different cards MAX.
 * so if size of set <> 2 => not a full house
 */


 const isAFullHouse = (hand) => {

    let cardCount = new Set();

    if (hand.length != 5){
        return false;
    }

    for (let i=0; i<hand.length; i++){
        cardCount.add(hand[i]);
    }

    return cardCount.size === 2;
 }

//  let firstHand = ['k', 'a', 'a', 'k', 'k'];

//  console.log(isAFullHouse(firstHand));


//  let secondHand = ['j', 'a', 'a', 'k', 'k'];

//  console.log(isAFullHouse(secondHand));

//  let thirdHand = ['j', '1', 'a', 'k', '2'];

//  console.log(isAFullHouse(thirdHand));

let fourthHand = ['j', '1', 'a', 'k'];
 console.log(isAFullHouse(fourthHand));