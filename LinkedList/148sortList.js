// 148. Sort List

var sortList = function (head) {
  let min = Infinity;
  let max = -Infinity;
  let current = head;
  let nums = {};
  while (current) {
    min = Math.min(min, current.val);
    max = Math.max(max, current.val);
    nums[current.val] = nums[current.val] + 1 || 1;
    current = current.next;
  }

  let list = new ListNode();
  const dummy = list;
  for (let i = min; i <= max; i++) {
    if (i in nums) {
      let times = nums[i];
      while (times--) {
        list.next = new ListNode(i);
        list = list.next;
      }
    }
  }

  return dummy.next;
};


// merge sort implementation
var sortList = function (head) {
  if (!head || !head.next) return head;

  let left = head;
  let right = getMid(head);

  // making two linked lists
  let temp = right.next;
  right.next = null;
  right = temp;

  let sortedLeft = sortList(left);
  let sortedRight = sortList(right);

  return merge(sortedLeft, sortedRight);
};

function getMid(head) {
  let slow = head;
  let fast = head.fast;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function merge(list1, list2) {
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = list1 || list2;

  return dummy.next;
}