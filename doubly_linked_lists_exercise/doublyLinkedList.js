function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList(array = []) {
  this.head = null;
  this.tail = null;
  this.length = 0;

  if (Array.isArray(array)) {
    array.forEach((el) => {
      this.push(el);
    });
  }
}

DoublyLinkedList.prototype.push = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = this.tail = newNode;
  }
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
  this.length++;
  return this;
};

DoublyLinkedList.prototype.unshift = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = this.tail = newNode;
  }
  this.head.prev = newNode;
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  return this;
};

DoublyLinkedList.prototype.insert = function (index, val) {
  let current = this.getNode(index - 1);
  let newNode = new Node(val);
  newNode.next = current.next;
  newNode.prev = current;
  current.next = newNode;

  this.length++;
  return this.length;
};

DoublyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }
  let counter = 0;
  let current = this.head;
  while (current) {
    if (counter === index) {
      break;
    }
    counter++;
    current = current.next;
  }
  return current;
};

DoublyLinkedList.prototype.get = function (index) {
  return this.getNode(index)?.val || null;
};

DoublyLinkedList.prototype.set = function (index, val) {
  let node = this.getNode(index);
  return node ? (node.val = val) : undefined;
};

DoublyLinkedList.prototype.pop = function () {
  if (!this.length) return undefined;
  let previous = this.getNode(this.length - 2);
  let deleted = previous.next;
  deleted.next = null;
  this.tail = previous;
  this.length--;
  return deleted.val;
};

DoublyLinkedList.prototype.shift = function () {
  if (this.head === null) {
    return undefined;
  }
  let temp = this.head;
  this.head = this.head.next;
  temp.next = null;

  this.length--;
  return temp.val;
};

DoublyLinkedList.prototype.remove = function (index) {
  let previous = this.getNode(index - 1);
  let removed = null;

  if (this.length === 1) {
    removed = this.shift();
  } else {
    removed = previous.next;
    previous.next = removed.next;
    removed.next = null;
  }
  this.length--;
  return removed;
};

DoublyLinkedList.prototype.reverse = function () {
  if (this.head === null) return undefined;
  let node = this.head;
  let previous = null;

  this.head = this.tail;

  while (node) {
    let temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  this.head = previous;
};

module.exports = DoublyLinkedList;
