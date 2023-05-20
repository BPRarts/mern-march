class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    addFront(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
  
    display() {
      let currentNode = this.head;
      let listString = "";
  
      while (currentNode) {
        listString += currentNode.data + " next ";
        currentNode = currentNode.next;
      }
  
      listString += "null";
      return listString;
    }
  }
  
 
  const SLL1 = new SLL();
  SLL1.addFront(76);
  console.log(SLL1.display()); 