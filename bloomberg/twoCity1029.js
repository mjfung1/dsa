var twoCitySchedCost = function(costs) {

    //KEY TRICK OF THIS QUESTION IS TO SORT IT BY DIFFERENCE BETWEEN TRAVELING 
    //BETWEEN CITIES FOR ONE PERSON
    costs = costs.sort((a,b) => (a[0] - a[1]) - (b[0] - b[1]));
 
    let price = 0;
    
    for (let i = 0; i < costs.length; i++) {
        if (i < costs.length / 2) price += costs[i][0];
        else price += costs[i][1]
    }
    return price;
};