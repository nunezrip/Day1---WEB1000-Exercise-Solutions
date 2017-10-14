// var x = 0;

// function Total(){
//     console.log(x);
//     if (x===5){
//         return 'FIVE is the end!';
//     }
//         x++;
//         return Total()
// }

// Total();



// Recursive Function

// var recursive = (n=0)=> n >= 5 ? 5: recursive(++n);

// recursive();

var recursive = (n=0)=> {
    console.log(n);
    return n === 5 ? 'Done!' : recursive(n>5 ? --n : ++n);
};

recursive();