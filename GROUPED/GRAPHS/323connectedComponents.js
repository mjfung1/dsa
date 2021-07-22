var countComponents = function(n, edges) {
    const adjacency = {};
    const connections = [];

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
        connections[node] = output;
        for (let adjacent of adjacency[node]) {
            if (!visited[adjacent]) visit(adjacent)
        }
    }
    
    let output = 0;
    // count how many unvisited
    // for loop prevents us from missing a unconnected component
    for (let node = 0; node < n; node++) {
        if (!visited[node]) {
            
            visit(node);
            output++;
        }
    }
    
    console.log(connections)
    return output;
};



// let vertices = [[8, 5], [1, 2], [2, 3], [2, 4], [3, 5], [6, 7]]  // 3 components
let vertices = [[1,5],[0,2],[2,4],[3,3]]
console.log(countComponents(6, vertices))