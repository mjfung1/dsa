var validTree = function(n, edges) {
    const adjacency = {};
    const visited = {};
    const parent = {};
    
    for (let node = 0; node < n; node++) {
        adjacency[node] = [];
    }
    
    for (const edge of edges) {
        const [node1, node2] = edge;
        adjacency[node1].push(node2);
        adjacency[node2].push(node1);
    }
    
    function isCycle(node) {
        visited[node] = true;
        
        for (const neighbor of adjacency[node]) {
            if (!visited[neighbor]) {
                //set parent node relationship
                parent[neighbor] = node
                isCycle(neighbor)
            } else {
                //if node has been visited and its not the parent. there is a cycle
                if(neighbor !== parent[node]) return true;
            }
        }
        return false;
    }
    
    let count = 0;
    
    for (let node = 0; node < n; node++) {
        if (!visited[node]) {
            count++;
            if (count > 1) return false
            if (isCycle(node)) return false
        }
    }
  return true
};