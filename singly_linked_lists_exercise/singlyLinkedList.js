function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(array = []) {
  this.head = null;
  this.tail = null;
  this.length = 0;
  if (Array.isArray(array)) {
    array.forEach((el) => {
      this.push(el);
    });
  }
}

SinglyLinkedList.prototype.push = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
};

SinglyLinkedList.prototype.unshift = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
};

SinglyLinkedList.prototype.getNode = function (index) {
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

SinglyLinkedList.prototype.insert = function (index, val) {
  let newNode = new Node(val);
  let current = this.getNode(index - 1);
  newNode.next = current.next;
  current.next = newNode;
  this.length++;
  return this.length;
};

SinglyLinkedList.prototype.get = function (index) {
  let node = this.getNode(index);
  return node ? node.val : null;
};

SinglyLinkedList.prototype.set = function (index, val) {
  let node = this.getNode(index);
  return node ? (node.val = val) : undefined;
};

SinglyLinkedList.prototype.shift = function () {
  if (this.head === null) {
    return undefined;
  }
  let temp = this.head;
  this.head = this.head.next;
  temp.next = null;

  this.length--;
  return temp.val;
};

SinglyLinkedList.prototype.remove = function (index) {
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

SinglyLinkedList.prototype.pop = function () {
  if (!this.length) return undefined;
  let previous = this.getNode(this.length - 2);
  let deleted = previous.next;
  deleted.next = null;
  this.tail = previous;
  this.length--;
  return deleted.val;
};

SinglyLinkedList.prototype.reverse = function () {
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

module.exports = SinglyLinkedList;
