var coinChange = function(coins, amount) {
    const table = new Array(amount+1).fill(Infinity);
    table[0] = 0;
  
    for (const coin of coins) {
        
        for (let i = 1; i < table.length; i++) {
            if (coin <= i) {
                table[i] = Math.min(table[i], table[i-coin] + 1)
            }
        }
    }
 
    return table[amount] === Infinity ? -1 : table[amount];
};