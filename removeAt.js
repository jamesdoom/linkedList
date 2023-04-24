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
  //Removes the node at the given index.
  removeAt(index) {
  //Checks if the index is out of bounds and throws an error if it is.  
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }
  //Sets up some variables to keep track of the current and previous nodes,
  //and iterates through the list until it reaches the node at the given index.
    let currentNode = this.head;
    let previousNode = null;
  //If the index is 0, it updates the head property to the next node in the list.
    if (index === 0) {
      this.head = currentNode.nextNode;
      if (this.length === 1) {
        this.tail = null;
      }
  //If the index is the last node in the list, it updates the tail property to the 
  //previous node.
    } else if (index === this.length - 1) {
      currentNode = this.tail;
      this.tail = previousNode;
    } else {
  //Otherwise, it updates the nextNode property of the previous node to point to the
  //next node in the list, effectively removing the node at the given index.
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      previousNode.nextNode = currentNode.nextNode;
    }
  //Finally, it decrements the length property and returns the value of the removed node.
    this.length--;
    return currentNode.value;
  }
}