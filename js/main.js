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

Array.prototype.flatten = function() {
    return this.reduce(function(a, b) {
        return a.concat(b);
      }, []);
}

function render () {
    board.flatten().forEach(function(elem, index) {
        $(`#${index}`).css('background-color', color[elem.toString()]); 
    })
}
render();

$('button').on('click', function() {
    var rowIdx;
    var colIdx = parseInt(this.id);
    var colArr = board[colIdx];
    var rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    console.log('clicked on' ,colIdx, rowIdx)
    turn *= -1;
    render();
    winCheck();
});


function winCheck () {
    // colIdx = a;
    // discIdx = b;

    for( var colIdx = 0; colIdx < 7; colIdx++) {
        for (var rowIdx = 0; rowIdx < 7; rowIdx++){
            // at each cell
            // note: colIdx is equal to the col index at this cell
            // rowIdx is the row index of this cell
            console.log('colIdx =', colIdx, 'rowIdx = ', rowIdx)
            console.log(board[colIdx][rowIdx]);
            
            // check right
            checkRight(colIdx, rowIdx);

            // // check up
            // checkUp(colIDx, rowIdx);
            // // check diagonal up right
            // checkDiagnolUpRight(coldIdx, rowIdx);
            // // check diagonal up left
            // checkDiagnolUpLeft(colIdx, rowIdx);
        }
    }

    // check the columns
    
    // // check the row
    // Math.abs(board[colIdx][rowIdx] + board[colIdx][rowIdx + 1] + board[colIdx[rowIdx + 2]] + board[colIdx][rowIdx +3]) === 4;
    
    // // check diagonal up
    // Math.abs(board[colIdx][rowIdx] + board[colIdx + 1 ][rowIdx +1] + board[colIdx + 2][rowIdx + 2] + board[colIdx + 3][rowIdx + 3]) === 4;
    
    // // check diagonal down
    // Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx - 1] + board[colIdx - 2][rowIdx + 2] + board[colIdx - 3][discIdx + 3]) === 4;
};

function checkRight(colIdx, rowIdx) {
    if (colIdx > 3) return; //console.log("cant check right at", colIdx, rowIdx);
    
    var cell1 = board[colIdx][rowIdx];
    var cell2 = board[colIdx +1][rowIdx];
    var cell3 = board[colIdx +2][rowIdx];
    var cell4 = board[colIdx +3][rowIdx];

    var sum =  Math.abs(cell1 + cell2 + cell3 + cell4);

    console.log(cell1, cell2, cell3, cell4);
    console.log('Sum is =', sum);

    if (sum === 4) console.log("winner");

    // if (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx] + board[colIdx + 2] + board[colIdx + 3][rowIdx]) === 4 || -4) console.log("winner");
}
    
    
    
    // document.querySelector("table").addEventListener('click', switchTurn);
    
    // function switchTurn () {
        //     $('.board').on('click', 'td.dots', function(index) {
            //         index = this.id;
            //         console.log(index)
            //     });
            // }
            
            // function winCheck () {
            //     Math.abs(board[colIdx][discIdx] + board[colIdx + 1][discIdx] + board[colIdx + 2] + board[colIdx + 3][discIdx]) === 4;
               
            //     Math.abs(board[colIdx][discIdx] + board[colIdx][discIdx + 1] + board[colIdx[discIdx + 2]] + board[colIdx][discIdx +3]) === 4;
             
            //     Math.abs(board[colIdx][discIdx] + board[colIdx + 1 ][discIdx +1] + board[colIdx + 2][discIdx + 2] + board[colIdx + 3][discIdx + 3]) === 4;
                 
            //     Math.abs(board[colIdx][discIdx] + board[colIdx + 1][discIdx - 1] + board[colIdx - 2][discIdx + 2] + board[colIdx - 3][discIdx + 3]) === 4;
            //  };  
            
            
            
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
                                                                    
                                                                    
                                                                    // function endGame () {
                                                                        
                                                                        
                                                                        // }
                                                                        
                                                                        // render();
                                                                        // init();
                                                                        
                                                                        // $('.button').on('click', 'button.drop', function(index){
                                                                            //     var index = this.id;
                                                                            // $(this).css('background-color', color[0]);
                                                                            // $(this).css('background-color', color[board[1][1]);
                                                                            // });
                                                              
                                                                            // document.querySelector('button').addEventListener('click', add0);
                                                                            // function add0(evt){
                                                                                //     player = !player;
                                                                                //     var colIdx = parseInt(this.id);
                                                                                //     var rowIdx = board.indexOf(0);
                                                                                //     if (board[7] !== 0 ) return;
                                                                                //     else if (player) board.splice(rowIdx, 1, 1);
                                                                                //     else board.splice(rowIdx, 1, -1);
                                                                                //     console.log(board);  
                                                                                