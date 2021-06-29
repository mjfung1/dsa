// 24. Swap Nodes in Pairs

var swapPairs = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let runner = dummy;

  while (runner.next && runner.next.next) {
    let r1 = runner.next;
    let r2 = runner.next.next;

    runner.next = r2;
    r1.next = r2.next;
    r2.next = r1;

    runner = runner.next.next;
  }

  return dummy.next;
};
