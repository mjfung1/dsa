// 86 Partition List

var partition = function (head, x) {
  let lessThan = new ListNode();
  let lessThanRunner = lessThan;

  let greaterThan = new ListNode();
  let greaterThanRunner = greaterThan;

  while (head) {
    if (head.val < x) {
      lessThanRunner.next = head;
      lessThanRunner = lessThanRunner.next;
    } else {
      greaterThanRunner.next = head;
      greaterThanRunner = greaterThanRunner.next;
    }
    head = head.next;
  }

  // tie lose ends
  greaterThanRunner.next = null;
  lessThanRunner.next = greaterThan.next;

  return lessThan.next;
};
