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
    //Takes two arguments: value and index. 
    insertAt(value, index) {
    //Creates a new node with the given value.
      const newNode = new Node(value);
    //If the linked list is empty or the given index is 0, 
    //the new node becomes the new head of the linked list.
      if (!this.head || index === 0) {
        newNode.nextNode = this.head;
        this.head = newNode;
  
        if (!this.tail) {
          this.tail = newNode;
        }
  
        return;
      }

      let currentNode = this.head;
      let currentIndex = 0;
    //If the linked list is not empty and the given index is greater than 0, 
    //the function iterates through the linked list until it reaches the node at 
    //the given index or the end of the linked list.
      while (currentNode.nextNode && currentIndex < index - 1) {
        currentNode = currentNode.nextNode;
        currentIndex++;
      }
  
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
    //If the new node is the last node in the linked list, it becomes the new tail
      if (!newNode.nextNode) {
        this.tail = newNode;
      }
    }
  }