// 332. Reconstruct Itinerary

var findItinerary = function(tickets) {    
    const adjacency = {};
    const visited = {};
    
    for (const [from, to] of tickets) {
        if (!adjacency[from]) {
            adjacency[from] = [to]
        } else {
            adjacency[from].push(to);
        }
    }
    
    for (let airline in adjacency) {
        if (adjacency[airline].length>1) {
            adjacency[airline].sort();
        }
    }

    const output = [];
    
    function dfs(airline) {
        
        while(adjacency[airline] && adjacency[airline].length) {
            dfs(adjacency[airline].shift());
        }
        output.push(airline);
    }
    
    dfs('JFK')
    return output.reverse();
};