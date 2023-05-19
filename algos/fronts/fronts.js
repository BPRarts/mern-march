//add front 

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// class SLL {
//     constructor() {
//         this.head = null;
//     }
    
    
//     addFront(value) {
//       const newNode = new Node(value);
  
//       if (!this.head) {
//         // If the list is empty, make the new node the head
//         this.head = newNode;
//       } else {
//         // If the list is not empty, make the new node the new head
//         newNode.next = this.head;
//         this.head = newNode;
//       }
  
//       return this.head;
//     }
//   }
// //   const SLL1 = new SLL();
//   console.log(SLL1.addFront(18)); 









//remove front
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
  
    removeFront() {
      if (!this.head) {
        return null;
      }
      const removedNode = this.head; 
      this.head = this.head.next;
  
      removedNode.next = null;
      return this.head; 
    }
  }
  
  const SLL1 = new SLL();
  console.log(SLL1.removeFront()); 
  
 
  

