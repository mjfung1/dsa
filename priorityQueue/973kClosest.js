
// 973. K Closest Points to Origin   -   MEDIUM


var kClosest = function (points, k) {
  const minPQ = new MinPriorityQueue();

  for (let point of points) {
    const [x, y] = point;
    let sum = x ** 2 + y ** 2;

    minPQ.enqueue(point, sum);
  }

  const output = [];

  while (k--) {
    output.push(minPQ.dequeue().element);
  }

  return output;
};
