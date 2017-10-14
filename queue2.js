

var Queue = function(){

    this.storage = {};
    this.head = 0;
    this.tail = 0;
    this.limit = 10;
    
}

    Queue.prototype.enqueued = function(item){
        if ((this.tail - this.head) < this.limit){
            this.storage[this.tail]= item;
            console.log(this.head, this.tail)
            this.tail++;
            return this.storage;

        }
       
        alert("Storgae is Full")
};

    Queue.prototype.dequeued = function(){
        if (this.head < this.tail){
            delete this.storage[this.head++];
            //Console.log(this.head, this.tail);
            return this.storage; 

            
             } else {
                    this.head = 0;
                    this.last = 0;
                    return "Emty Queue!"
                    
                
            }
        };

Queue.prototype.size = function(){
    return this.last - this.first;
};

    

var myStudents = new Queue();

myStudents.enqueued("Julian");
myStudents.enqueued("Jamile");
myStudents.enqueued("Karel");
myStudents.enqueued("Pablo");
myStudents.enqueued("Marcel");
myStudents.enqueued("Pedro");







