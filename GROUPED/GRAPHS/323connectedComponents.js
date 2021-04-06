var countComponents = function(n, edges) {
    const adjacency = {};
    
    //visited prevents from counting components twice
    const visited = {};
    
    for (let node = 0; node < n; node++) {
        adjacency[node] = [];
    }
    
    // create relationship
    for (const edge of edges) {
        const [node1, node2] = edge;
        adjacency[node1].push(node2);
        adjacency[node2].push(node1)
    }
    
    // create a dfs that will visit
    function visit(node) {
        visited[node] = true;
        
        for (const adjacent of adjacency[node]) {
            if (!visited[adjacent]) visit(adjacent)
        }
    }
    
    let output = 0;
    // count how many unvisited
    // for loop prevents us from missing a unconnected component
    for (let node = 0; node < n; node++) {
        if (!visited[node]) {
            output++;
            visit(node)
        }
    }
    
    
    return output;
};