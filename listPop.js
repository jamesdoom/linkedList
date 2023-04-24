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
  
    pop() {
      if (!this.head) {
    //If the list is empty, there's nothing to remove
        return null;
      }
  
      let current = this.head;
      let previous = null;

      while (current.nextNode) {
    //Traverse the list until we reach the last node
        previous = current;
        current = current.nextNode;
      }
    //Once we've reached the last node, remove it
      if (previous) {
    //If the list has more than one node
        previous.nextNode = null;
        this.tail = previous;
      } else {
    //If the list has only one node
        this.head = null;
        this.tail = null;
      }
  
      return current.value;
    }
  }