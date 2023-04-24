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
    contains(value) {
        let currentNode = this.head;
    //Uses a while loop to traverse the linked list, starting from the head node
    //and moving through each subsequent nextNode until it reaches the end of the 
    //list (null). 
        while (currentNode) {
    //If the current node's value property matches the passed-in value, 
    //the function returns true
          if (currentNode.value === value) {
            return true;
          }
    // Otherwise, it continues to the next node. If it reaches the end of the
    // list without finding a match, it returns false.
          currentNode = currentNode.nextNode;
        }
        return false;
      }  

  }