class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    //creates a new Node object with the given "value"
    const newNode = new Node(value);
    //It then checks if the list is empty (i.e. tail === null). 
    //If it is, it sets both head and tail to the new node, since 
    //this node will be the only node in the list.
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    //If the list is not empty, it sets the nextNode property of the 
    //current tail node to the new node, and then updates the tail property 
    //to point to the new node, since this node will now be the new tail node.
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }
}
