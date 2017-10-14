


var stack = function (){  
    this.count = 0;
    this.storage = []; 
}  

stack.prototype.push = function(myWeeklyMenu){ 
    this.storage.push(myWeeklyMenu); 
    this.storage.length;  
}  

stack.prototype.pop = function(myWeeklyMenu){  
//     if (this.count === 0) { 
//         return undefined;   
// }  

//     this.count--; 
//     var result = this.storage[this.count]; 
//     delete this.storage[this.count]; 
//         console.log(result);
this.storage.pop()
} 

stack.prototype.size = function(myWeeklyMenu){  
        console.log(this.count);  
}  

var myWeeklyMenu = new stack();  
myWeeklyMenu.push("redBeans"); 
myWeeklyMenu.push("whiteRice"); 
myWeeklyMenu.push("plantains"); 
myWeeklyMenu.push("chicken"); 
myWeeklyMenu.push("lettuce"); 
myWeeklyMenu.push("tomatoes"); 

console.log(stack.prototype.push())
console.log(stack.prototype.pop())
console.log(stack.prototype.size())