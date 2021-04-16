// 332. Reconstruct Itinerary

var findItinerary = function(tickets) {    
    const adjacency = {};
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

// another way

var findItinerary = function(tickets) {    
    const adjacency = {};
    // setting up adjacency
    for (const [from, to] of tickets) {
        adjacency[from] ? adjacency[from].push(to) : adjacency[from] = [to]
    }
    
    // sort it by lexical order when in adjacency;
    for (let airline in adjacency) {
            adjacency[airline].sort();
    }

    const output = [];
    
    function dfs(airline) {
        

        while(adjacency[airline] && adjacency[airline].length) {
            // shift to grab from the front
            const airport = adjacency[airline].shift()
            dfs(airport);
        }
        // unshift. ALWAYS ADDING TO THE FRONT;
        output.unshift(airline);
    }
    
    dfs('JFK')
    return output;
};