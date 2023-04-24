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
    find(value) {
    //Starts by setting the currentNode variable to the head of
    //the linked list and initializing an index variable to 0.
        let currentNode = this.head;
        let index = 0;
    //Enters a while loop that iterates over the linked list, checking each node's
    //value for a match with the given value parameter.   
        while (currentNode !== null) {
    //If a node is found with a matching value, the function returns the current index.
          if (currentNode.value === value) {
            return index;
          }
    //Otherwise, the function continues to the next node by updating the currentNode
    //variable and incrementing the index variable.     
          currentNode = currentNode.nextNode;
          index++;
        }
    //If the end of the linked list is reached without finding a matching value, the 
    //function returns null to indicate that the value was not found in the linked list.   
        return null;
      }
    }