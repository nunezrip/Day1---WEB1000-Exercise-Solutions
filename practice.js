function Bulding(floors){
    //this = {}; this buikds an empty object 
    this.what = "building";
    this.floors = floors;
    return this;
}

var myHouse = new Building (3)
// {what: "building", floors: 3}


//ChessGame Calssess

function ChessGame(){
    this.pieces = pieces;
    this.pieces1 = "white";
    this.pieces2 = "black";
    this.validateMove = "move";
}

ChessGame.prototype.countPieces = function (){
    if (this.pieces === 16){
        return `there are ${this.pieces} ${this.pieces1} and ${this.pieces2} 
        pieces in a chess game`
    }
    else {
        return `you enetered ${this.pieces} pieces, please enter the right number`
    }
}

var game1 = new ChessGame (16);
var game2 = new ChessGame (8);
var game3 = new ChessGame (8);
var game4 = new ChessGame (1);

console.log(game1.countPieces())
console.log(game2.countPieces())
console.log(game3.countPieces())
console.log(game4.countPieces())
 

