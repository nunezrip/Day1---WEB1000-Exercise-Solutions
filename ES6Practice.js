// Conver Queue to ES6 class syntax

class Queue {
    constructor() {
       this.storage = {};
       this.first = 0;
       this.last = 0;
       this.limit = 10;
    }
    enqueue() {
       if ((this.last - this.first) < this.limit){
           this.storage[this.last] = item;
          //  console.log(this.first, this.last);
           this.last++;
           return this.storage;
         }
         return ‘full queue!’;
    }
    dequeue() {
       if (this.first < this.last) {
           delete this.storage[this.first++];
           console.log(this.first, this.last);
           return this.storage;
       } else  {
           this.first = 0;
           this.last = 0;
           return ‘empty queue!’
       }
    }
    size() {
       return this.last - this.first;
    }
}

var myStudents = new Queue1();
myStudents.enqueue(‘Pepe’);
myStudents.enqueue(‘Pedro’);
myStudents.enqueue(‘Iran’);
myStudents.enqueue(‘Yami’);
myStudents.enqueue(‘Marcel’);
myStudents.enqueue(‘Karel’);
myStudents.enqueue(‘Pablo’);
