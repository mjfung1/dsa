
// 373. Find K Pairs with Smallest Sums

// time O(m * n);
// space O(m * n)

var kSmallestPairs = function (nums1, nums2, k) {
  const minpq = new MinPriorityQueue();

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let firstNum = nums1[i];
      let secNum = nums2[j];

      let sum = firstNum + secNum;

      minpq.enqueue([firstNum, secNum], sum);
    }
  }
  console.log(nums1, nums2, k);

  const output = [];

  while (k-- && minpq.size()) {
    let node = minpq.dequeue();

    output.push(node.element);
  }

  return output;
};