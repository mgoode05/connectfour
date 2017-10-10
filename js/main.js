var color = {
    "0": "white",
    "1": "red",
    "-1": "blue" 
}

var board;
var winner;
var turn;

function init() {
    turn = 1;
    board = [
        [0,0,0,0,0,0],
         [0,0,0,0,0,0],
         [0,0,0,0,0,0],
         [0,0,0,0,0,0],
         [0,0,0,0,0,0],
         [0,0,0,0,0,0],
         [0,0,0,0,0,0]
    ];
    winner = null;
}
init();
// render();

// function render (board) {
//     for (var i = 0; i < 42; i++) {
//         board[i].style.backgroundcolor = color;
//     };
//         // $('table').css('background-color', color);

// }

$('button').on('click', function() {
    var rowIdx;
    var colIdx = parseInt(this.id);
    var colArr = board[colIdx];
    var rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    turn *= -1;
    // update winner
    // winner = getWinner();




});

// document.querySelector('button').addEventListener('click', add0);
// function add0(evt){
//     player = !player;
//     var colIdx = parseInt(this.id);
//     var rowIdx = board.indexOf(0);
//     if (board[7] !== 0 ) return;
//     else if (player) board.splice(rowIdx, 1, 1);
//     else board.splice(rowIdx, 1, -1);
//     console.log(board);  
    
// }
// document.querySelector("#B1").addEventListener('click', add1);
// function add1(evt){
//     player = !player;
//     var colIdx = parseInt(this.id);
//     var place = board.indexOf(0);
//     if (board[7] !== 0 ) return;
//     else if (player) board.splice(place, 1, 1);
//     else board.splice(place, 1, -1);
//     console.log(board);   
// }









// document.querySelector("#B1").addEventListener('click', add1);
// function add1(evt){
//     // evt.target.button
//     if (col1.length >= 6) col1.push("0");
//     else if (player1) col1.push("1");
//     else col1.push("-1");
//     player1 = !player1;
//     console.log(col1);
// } 
// document.querySelector("#B2").addEventListener('click', add2);
// function add2(evt){
//     evt.target.button
//     if (col2.length >= 6) col2.push("0");
//     else if (player1) col2.push("1");
//     else col2.push("-1");
//     player1 = !player1;
//     console.log(col2);
// } 
// document.querySelector("#B3").addEventListener('click', add3);
// function add3(evt){
//     evt.target.button
//     if (col3.length >= 6) col3.push("0");
//     else if (player1) col3.push("1");
//     else col3.push("-1");
//     player1 = !player1;
//     console.log(col3);
// }
// document.querySelector("#B4").addEventListener('click', add4);
// function add4(evt){
//     evt.target.button
//     if (col4.length >= 6) col4.push("0");
//     else if (player1) col4.push("1");
//     else col4.push("-1");
//     player1 = !player1;
//     console.log(col4);
// }
// document.querySelector("#B5").addEventListener('click', add5);
// function add5(evt){
//     evt.target.button
//     if (col5.length >= 6) col5.push("0");
//     else if (player1) col5.push("1");
//     else col5.push("-1");
//     player1 = !player1;
//     console.log(col5);
// }
// document.querySelector("#B6").addEventListener('click', add6);
// function add6(evt){
//     evt.target.button
//     if (col6.length >= 6) col6.push("0");
//     else if (player1) col6.push("1");
//     else col6.push("-1");
//     player1 = !player1;
//     console.log(col6);
// };


// $(this).css('background-color', color[1]);
// $(this).css('background-color', color[board]);


// $('.table').on('click', 'td.dots', function(board){
//     var index = board;
//     var col = getCol(index);
//     var row = getRow(index);
//     function getCol(index) {
//         return index % 7;
//     }
//     function getRow(index) {
//         var row = Math.floor(index / 7);
//         return 5 - row;
//     }
    
//     $(this).css('background-color', color[board[row][col]]);
// });



// document.querySelector("table").addEventListener('click', switchTurn);

// function switchTurn () {
//     $('.board').on('click', 'td.dots', function(index) {
//         index = this.id;
//         console.log(index)
//     });
// }





//         var col = function getCol(index) {
    //             return index % 7;
//         }
//         var row = function getRow(index) {
//             (Math.floor(index/7))-5;
//             return;
//         }
//         blue = !blue;
//         $(this).css('background-color', color[0]);
//         // $(this).css('background-color', color[board[col][row]]);

//         var index = board.splice(this.id, "55");
//         console.log(board[index]);
//     })
  



// function switchTurn(evt) {
//     evt.target.id
//     var index = board.splice(evt.target.id, 5, 5)
//     if (board[index] === "1" || board[index] === "-1") {
//         return
//     }
//     blue = !blue;
//     board[index] = blue ? "1" : "-1";
//     render(board);
// }
// document.querySelector(".board").addEventListener('click', switchTurn);

// function render (board) {
//     board.forEach(function(elem, index) {
//         document.querySelector(`#board${index}`).innerText = elem;
//     });
   
    
// };
            
        // });
      
//         $('.board').on('click', "td.dots", function(index){
//             var index = this.id;
            
//             function getCol(index) {
//                 ;
//             }
//         })
        
//  function render () {
//     var color = {
//           "0": "white",
//           "1": "red",
//           "-1": "blue" 
//             }
//         }
            
//   $('.button').on('click', 'button.drop', function(board){
//             var index = this.id;
//             var col = getCol(index);
//             var row = getRow(index);
            
//       $(this).css('background-color', color[0]);
//        $(this).css('background-color', color[board[row][col]]);
//     });

//         function getCol(index) {
//             return index % 7;
//         }
//         function getRow(index) {
//             var row = Math.floor(index / 7);
//             return 5 - row;
//         }


// document.querySelector("table").addEventListener('click', turn);
//         function turn (evt) {
//             turn *= -1;
            
//         } 
    
//     }
// }

// function winCheck () {
//    Math.abs(board[colIdx][discIdx] + board[colIdx + 1][discIdx] + board[colIdx + 2] + board[colIdx + 3][discIdx]) === 4;
//   //up-down check
//    Math.abs(board[colIdx][discIdx] + board[colIdx][discIdx + 1] + board[colIdx[discIdx + 2]] + board[colIdx][discIdx +3]) === 4;
//    //horizontal check
//    Math.abs(board[colIdx][discIdx] + board[colIdx + 1 ][discIdx +1] + board[colIdx + 2][discIdx + 2] + board[colIdx + 3][discIdx + 3]) === 4;
//     //diagnol-up check
//    Math.abs(board[colIdx][discIdx] + board[colIdx + 1][discIdx - 1] + board[colIdx - 2][discIdx + 2] + board[colIdx - 3][discIdx + 3]) 
// };

// function endGame () {


// }

// render();
// init();

// $('.button').on('click', 'button.drop', function(index){
//     var index = this.id;
// $(this).css('background-color', color[0]);
// $(this).css('background-color', color[board[1][1]);
// });


// var board = [[0,0,0,0,0,0],
// [col1],
// [col2],
// [col3],
// [col4],
// [col5],
// [col6]
// 