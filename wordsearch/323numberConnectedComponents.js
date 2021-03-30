var countComponents = function(n, edges) {
    const neighbors = {};
    const canVisit = {};
    let count = 0;
    
    for (let node = 0; node < n; node++) {
        neighbors[node] = [];
        canVisit[node] = false;
    }
    
    for (const edge of edges) {
        const [node1, node2] = edge;
        neighbors[node1].push(node2);
        neighbors[node2].push(node1);
    }
    
    function visit(node) {
        canVisit[node] = true;
        
        for (let neighbor of neighbors[node]) {
            if (canVisit[neighbor]) continue;
            visit(neighbor)
        }
        

    }
    
    for (let node = 0; node < n; node++) {
        if (canVisit[node]) continue;
        visit(node);
        count++;
    }

    return count;
};