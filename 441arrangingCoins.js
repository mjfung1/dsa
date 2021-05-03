// 441. Arranging Coinsvar arrangeCoins = function(n) {
var arrangeCoins = function(n) {
    let completedRows = 0;
    
    for (let i = 1; i <= n; i++) {
        if (i > n) break;
        n = n - i;
        completedRows++;
    }
    return completedRows
};