
// Floyds algorithm. 
// CONSTANT SPACE.
var detectCycle = function (head) {
  let turtle = head;
  let hare = head;
  let hasCycle = false;

  while (hare && hare.next) {
    turtle = turtle.next;
    hare = hare.next.next;
    if (turtle === hare) {
      hasCycle = true;
      break;
    }
  }

  if (!hasCycle) {
    return null;
  } else {
    turtle = head;
    while (turtle !== hare) {
      turtle = turtle.next;
      hare = hare.next;
    }
  }
  return turtle;
};


// more space. simpler
// LINEAR SPACE
var detectCycle = function (head) {
  const node = new Set();

  while (head) {
    if (node.has(head)) {
      return head;
    } else {
      node.add(head);
    }

    head = head.next;
  }
  return null;
};