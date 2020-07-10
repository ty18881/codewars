/** 
 * 2020.07.09 - Robin.io
 * Create a queue in Javascript
 * remove - returns the first / head element
 * add - puts the element at the back of the queue
 */


 class Queue {
     constructor() {
         this.items = [];
     }

     // add (aka enqueue) - add new item to the end of the queue
     add (element){
         this.items.push(element);
     }

     // remove (dequeue) - remove from the front of the queue

     remove() {
         // if queue is empty, warn user.
         // otherwise, return the first item on the queue

         if (this.items.length === 0) {
             return 'Queue is empty';
         }

         return this.items.shift();
     }
 }


 let myQueue = new Queue();

 myQueue.add(22);
 myQueue.add(44);
 myQueue.add(88);


 console.log(myQueue.remove());