//Implement a stack and determine how many items  
 

var Stack = function (item){  
    this.storage  = '';
}  
Stack.prototype.push = function(item){  
    this.storage += '|' + item ;  
}  
Stack.prototype.pop = function(){  
    var index = this.storage.lastIndexOf('|');
    var last = this.storage.slice(index+1);
    this.storage = this.storage.slice(0,index)
;
return last;
    
};  
Stack.prototype.size = function(){  
    const stackArr = this.storage.split('|');
    return stackArr.length === -1; 

};  


var myStudents = new Stack;

myStudents.push("Pedro");
myStudents.push("Pablo");
myStudents.push("Yamile");
myStudents.push("Karel");
myStudents.push("Iran");
myStudents.push("Marcel");
myStudents.push("Julian");