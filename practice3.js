var Stack = function() {
    this.storage = {};
    this.tail = 0;
    this.limit = 10;
 };
 
 Stack.prototype.push = function(item) {
   if (this.tail < this.limit){
       this.storage[this.tail++] = item;
       return this.storage;
   }
   alert("stack is full");
 };
 
 Stack.prototype.pop = function(){
   if (this.tail > 0) {
     delete this.storage[--this.tail];
     return this.tail;
   }
   alert('stack is empty');
 };
 
 Stack.prototype.size = function() {
    return this.tail;
 };
 
 var myStudents = new Stack ();
 myStudents.push('Pepe');
 myStudents.push('Pedro');
 myStudents.push('Iran');
 myStudents.push('Yami');
 myStudents.push('Marcel');
 myStudents.push('Karel');
 myStudents.push('Pablo');