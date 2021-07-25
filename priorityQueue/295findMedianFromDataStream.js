
// 295. Find Median from Data Stream .     HARD

var MedianFinder = function () {
  this.minHeap = new MinPriorityQueue();
  this.maxHeap = new MaxPriorityQueue();
};

MedianFinder.prototype.addNum = function (num) {
  const maxHeap = this.maxHeap;
  const minHeap = this.minHeap;

  maxHeap.enqueue(num);
  minHeap.enqueue(maxHeap.dequeue().element);

  if (maxHeap.size() < minHeap.size()) {
    maxHeap.enqueue(minHeap.dequeue().element);
  }
};

MedianFinder.prototype.findMedian = function () {
  const maxHeap = this.maxHeap;
  const minHeap = this.minHeap;

  if (maxHeap.size() === minHeap.size()) {
    return (maxHeap.front().element + minHeap.front().element) / 2;
  } else {
    // the way I have it set up. maxHeap will always b bigger by 1 at most;
    // look function above addNum;
    return maxHeap.front().element;
  }
};