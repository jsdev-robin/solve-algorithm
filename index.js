class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createList(arr) {
  const dummy = new Node(-1);
  let tail = dummy;

  for (const val of arr) {
    tail.next = new Node(val);
    tail = tail.next;
  }

  console.log(dummy);

  return dummy.next;
}

const list1 = createList([1, 2, 4]);
