
// 886. Possible Bipartition

var possibleBipartition = function (n, dislikes) {
  let graph = graphBuilder(dislikes);

  const visited = {};

  for (const node in graph) {
    if (!(node in visited)) {
      if (!valid(node, graph, visited, 1)) return false;
    }
  }
  return true;
};

const valid = (node, graph, visited, color) => {
  if (node in visited) return visited[node] === color;

  visited[node] = color;

  for (let neighbor of graph[node]) {
    if (!valid(neighbor, graph, visited, -color)) return false;
  }

  return true;
};

const graphBuilder = (dislikes) => {
  const graph = {};

  for (const [a, b] of dislikes) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};