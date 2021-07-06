/** Interview Cake - Greedy Algorithm Practice
 * Calculate the best profit I could have made from one purchase and one sale based upon yesterday's stock prices.
 * NOTE: cannot buy and sell in the same time step.
 */

const stockPrices = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stockPrices){

    // How to come up with the answer in a single pass through the output?

    if (stockPrices.length < 2 ){
        throw new Error('Profit calculation requires at least two prices');
    }
    
    let minPrice = stockPrices[0];

    let maxProfit = stockPrices[1] - stockPrices[0];

    /**
     * Remember, we cannot buy and sell at the same time.
     */

    for (let i = 1; i < stockPrices.length; i++) {
        const currentPrice = stockPrices[i];

        const potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);

        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));

console.log(getMaxProfit([10, 7, 5, 4, 3, 2, 1]));