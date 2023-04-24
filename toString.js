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
    toString() {
    //Start at the beginning of the linked list.
        let currentNode = this.head;
    //Initialize an empty string to build the string representation of the linked list.
        let str = '';
    //Traverse the linked list, appending each node's value to the string with an arrow.
        while (currentNode !== null) {
          str += `(${currentNode.value}) -> `;
    //Move to the next node.
          currentNode = currentNode.nextNode;
        }
    //Append 'null' to the end of the string representation to signify the end 
    //of the linked list.
        str += 'null';
    //Return the final string representation of the linked list.
        return str;
      }
    }

const list = new LinkedList();
list.head = new Node(1);
list.head.nextNode = new Node(2);
list.head.nextNode.nextNode = new Node(3);

console.log(list.toString());