// 310. Minimum Height Trees - topological sort

var findMinHeightTrees = function (n, edges) {
  if (edges.length === 0) return [0];
  if (n <= 2) return edges[0];

  // trick to this problem is to use BFS not DFS

  // Create adjacency list;
  const adjacency = {};

  for (const [vertex1, vertex2] of edges) {
    adjacency[vertex1]
      ? adjacency[vertex1].add(vertex2)
      : (adjacency[vertex1] = new Set([vertex2]));
    adjacency[vertex2]
      ? adjacency[vertex2].add(vertex1)
      : (adjacency[vertex2] = new Set([vertex1]));
  }

  // Leaves have one connection.
  let leaves = [];
  for (const vertex in adjacency) {
    if (adjacency[vertex].size === 1) leaves.push(vertex);
  }

  let remainingNodes = n;
  while (remainingNodes > 2) {
    remainingNodes -= leaves.length;
    temp = [];

    for (const leaf of leaves) {
      for (const neighbor of adjacency[leaf]) {
        adjacency[neighbor].delete(Number(leaf));
        if (adjacency[neighbor].size === 1) temp.push(neighbor);
      }
      console.log(temp);
      leaves = temp;
    }
  }

  return leaves;
};


// REFACTORED. INSTEAD OF USING FOR IN LOOP
// USED i; for in loop changes integer to string
var findMinHeightTrees = function (n, edges) {
  if (edges.length === 0) return [0];

  // trick to this problem is to use BFS not DFS

  // Create adjacency list;
  const adjacency = {};

  for (const [vertex1, vertex2] of edges) {
    adjacency[vertex1]
      ? adjacency[vertex1].add(vertex2)
      : (adjacency[vertex1] = new Set([vertex2]));
    adjacency[vertex2]
      ? adjacency[vertex2].add(vertex1)
      : (adjacency[vertex2] = new Set([vertex1]));
  }

  // Leaves have one connection.
  let leaves = [];
  for (let vertex = 0; vertex < n; vertex++) {
    if (adjacency[vertex].size === 1) leaves.push(vertex);
  }

  let remainingNodes = n;
  while (remainingNodes > 2) {
    remainingNodes -= leaves.length;
    let newLeaves = [];

    for (const leaf of leaves) {
      for (const neighbor of adjacency[leaf]) {
        adjacency[neighbor].delete(leaf);
        if (adjacency[neighbor].size === 1) newLeaves.push(neighbor);
      }

      leaves = newLeaves;
    }
  }

  return leaves;
};


// slight variation implementation
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  const graph = graphBuilder(n, edges);
  const indegrees = Array(n).fill(0);

  for (const [vertex1, vertex2] of edges) {
    indegrees[vertex1]++;
    indegrees[vertex2]++;
  }

  const queue = [];
  for (let vertex = 0; vertex < n; vertex++) {
    if (indegrees[vertex] === 1) queue.push(vertex);
  }

  while (n > 2) {
    let size = queue.length;
    n -= size;

    while (size > 0) {
      let node = queue.shift();
      size -= 1;

      for (let neighbor of graph.get(node)) {
        indegrees[neighbor]--;
        if (indegrees[neighbor] === 1) {
          queue.push(neighbor);
        }
      }
    }
  }

  return queue;
};

const graphBuilder = (n, edges) => {
  const graph = new Map();

  for (let node = 0; node < n; node++) {
    graph.set(node, []);
  }

  for (const [vertex1, vertex2] of edges) {
    graph.get(vertex1).push(vertex2);
    graph.get(vertex2).push(vertex1);
  }
  console.log(graph);
  return graph;
};