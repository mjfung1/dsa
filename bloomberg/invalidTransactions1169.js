// TRICK TO THIS QUESTION. CREATE A HASH FIRST.
// THEN ITERATE THRU AGAIN TO CHECK VALIDNESS WITH A HELPER FUNCTION


var isValid = function(transaction, map) {
    const [name, time, amount, city] = transaction.split(',');
    
    if (amount > 1000) return true;
    
    const attributes = map[name];
    
    for (const attribute of attributes) {
        if (city !== attribute.citys 
            && Math.abs(time - attribute.times) <= 60) return true;
    };
    return false;
};

var invalidTransactions = function(transactions) {
    const invalid = [];
    const mapTransactions = {};
    
    for (const transaction of transactions) {
        
        const [name, time, amount, city] = transaction.split(',');
        
        if (name in mapTransactions) {
            mapTransactions[name].push({times: time, citys: city});
        } else {
            mapTransactions[name] = [{times: time, citys: city}];
        };
    };



    
    for (const transaction of transactions) {
        if (isValid(transaction, mapTransactions)) {
            invalid.push(transaction);
        }
    };
    console.log(mapTransactions)
    return invalid;
};
