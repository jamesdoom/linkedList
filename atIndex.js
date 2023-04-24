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
    //Takes an index parameter and returns the node at the given index in the list
    at(index) {
    //If the index is out of bounds (i.e. less than 0 or greater than or equal to the size
    //of the list), it throws an error.
          if (index < 0 || index >= this.size()) {
          throw new Error("Index out of bounds");
        }
    //Otherwise, it initializes a count variable to 0 and a current variable to the head
    //of the list.
        let count = 0;
        let current = this.head;
    //It then iterates over the list by repeatedly setting current to the nextNode of the
    //current node and incrementing count by 1 until it reaches the node at the given index.
         while (count < index) {
          current = current.nextNode;
          count++;
        }
    //Returns the current variable, which represents the node at the given index.
        return current;
   
  }
}