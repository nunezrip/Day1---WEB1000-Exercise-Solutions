

var storage = {};

var Queue = function(){

    this.storage = {};
    this.first = 0;
}

    Queue.prototype.enqueued = function(item){

        this.storage[Object.keys(this.storage).length] = item;
        return Object.keys(this.storage).length;
}

    Queue.prototype.dequeued = function(){

        delete this.storage[this.first];
        this.first++;
        return this.storage;
}

    Queue.prototype.size = function(){
        return Object.keys(this.storage).length;
    
}


var myStudents = new Queue();

myStudents.enqueued("Julian");
myStudents.enqueued("Jamile");
myStudents.enqueued("Karel");
myStudents.enqueued("Pablo");
myStudents.enqueued("Marcel");
myStudents.enqueued("Pedro");







