
var board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
               ]
var getCol;


document.querySelector("table").addEventListener('click', turn);

$(".board").on("click", "td.dots", function() {
    console.log("works");
    var index = this.id;
    console.log(index);
})

function render (board) {
    board.forEach(function(elem, index){

    })
}

// function turn (evt) {
//     var color = {
//         "0" : "white";
//         "1" : "red";
//         "-1" : "blue";
//         evt.target.id;
//        var colIdx = function getCol(col, row) {
//            return color[board[col][row]];
//        }
        
    
//     }
// }

function winCheck () {
   Math.abs(board[colIdx][discIdx] + board[colIdx + 1][discIdx] + board[colIdx + 2] + board[colIdx + 3][discIdx]) === 4;
  //up-down check
   Math.abs(board[colIdx][discIdx] + board[colIdx][discIdx + 1] + board[colIdx[discIdx + 2]] + board[colIdx][discIdx +3]) === 4;
   //horizontal check
   Math.abs(board[colIdx][discIdx] + board[colIdx + 1 ][discIdx +1] + board[colIdx + 2][discIdx + 2] + board[colIdx + 3][discIdx + 3]) === 4;
    //diagnol-up check
   Math.abs(board[colIdx][discIdx] + board[colIdx + 1][discIdx - 1] + board[colIdx - 2][discIdx + 2] + board[colIdx - 3][discIdx + 3]) 
}

function endGame () {


}
