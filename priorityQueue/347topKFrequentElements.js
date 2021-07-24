
// 347. Top K Frequent Elements    ..MEDIUM


var topKFrequent = function (nums, k) {
  const freq = {};
  for (const num of nums) {
    freq[num] = freq[num] + 1 || 1;
  }

  let maxPQ = new MaxPriorityQueue();

  for (let num in freq) {
    maxPQ.enqueue(num, freq[num]);
  }

  const output = [];

  while (maxPQ.size() && k--) {
    let node = maxPQ.dequeue();
    output.push(node.element);
  }

  return output;
};


