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
    size() {
    //Initializes a count variable to 0 and a current variable to the head of the list.
      let count = 0;
      let current = this.head;
    //Iterates over the list by repeatedly setting current to the nextNode of the current 
    //node and incrementing count by 1 until it reaches the end of the list
    //(i.e. current === null).
      while (current !== null) {
        count++;
        current = current.nextNode;
      }
    //Returns the count variable, which represents the total number of nodes in the list.
      return count;
    }
  }