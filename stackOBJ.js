// The homework is to convert the stack in a way that uses 
// an Object instead of a string and with a maximum capacity 
// (no more than ten)

//Creates Constructor 

function Student1() {
    this.storage = {};
    this.cap = 10;
}

//Run push function; checks for capacity limit 

Student1.prototype.push = function(item){  
    if (Object.keys(this.storage).length < this.cap) {
         this.storage[Object.keys(this.storage).length] = item;
        return item;
    } else {
        return 'Stack overflowed, Please remove an item!'
    }
}  

//Runs pop function; checks storage size and deletes a 
// property value from the back one value at a time 

Student1.prototype.pop = function(){
        delete this.storage[Object.keys(this.storage).length - 1];
        return this.storage; 
};  

//Runs size function; returns size of the storage

Student1.prototype.size = function(){  
    return Object.keys(this.storage).length;
};  


var myStudents = new Student1;

myStudents.push("Pedro");
myStudents.push("Pablo");
myStudents.push("Yamile");
myStudents.push("Karel");

