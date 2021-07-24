
// BEST IMPLEMENTATION
// n log (k) - using a min heap

var findKthLargest = function (nums, k) {
  const minPQ = new MinPriorityQueue();

  for (let num of nums) {
    // O ( log(k) ) b/c we're keeping minPQ size k
    minPQ.enqueue(num, num);
    if (minPQ.size() > k) minPQ.dequeue();
  }

  return minPQ.front().element;
};






// time = 0( n log (n) );    sorting

var findKthLargest = function(nums, k) {
    nums.sort((a,b) => a-b);
    let idx = nums.length - k;
    
    return nums[idx];
};



// ----------------------------------------- //
// slight improvement???
// time = 0( n log (n) ) max heap.

var findKthLargest = function(nums, k) {
    let heapify = new MaxBinaryHeap();
    
    // to be fixed
    // something wrong with this algorithm
    // this n log n. might as well use sorting
    // why bc extracMax() is outside of for loop.
    // that means the for loop will increase to size n instead of size k
    
    for (const num of nums) {
        heapify.insert(num)
    }
    while (k > 1) {
        heapify.extractMax();
        k--
    }
    return heapify.values[0];
};

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let child = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx];
            if (child <= parent) break;
            this.values[parentIdx] = child;
            this.values[idx] = parent;
            idx = parentIdx; 
        }

    }

    extractMax() {        
         let max = this.values[0];
         let popped = this.values.pop();
         if (this.values.length > 0) {
            this.values[0] = popped;
            this.sinkDown();
         }
         return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const parent = this.values[0];
        while(true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (leftChild > parent) swap = leftIdx
            }

            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if (
                    (swap === null && rightChild > parent) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightIdx;
                  }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = parent;
            idx = swap;

        }
    }
}