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
    // board = [
    //     [0,0,0,0,0,0],
    //      [0,0,0,0,0,0],
    //      [0,0,0,0,0,0],
    //      [0,0,0,0,0,0],
    //      [0,0,0,0,0,0],
    //      [0,0,0,0,0,0],
    //      [0,0,0,0,0,0]
    // ];
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
    if (winner) return;
    var rowIdx;
    var colIdx = parseInt(this.id);
    var colArr = board[colIdx];
    var rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    turn *= -1;
    winCheck();
    render();
});

function winCheck () {
    if (winner) return;
    
    for( var colIdx = 0; colIdx < 6; colIdx++) {
        for (var rowIdx = 0; rowIdx < 5; rowIdx++) {
            winner = checkRight(colIdx, rowIdx) || checkUp(colIdx, rowIdx) || checkDiagnolUp(colIdx, rowIdx) || checkDiagnolDown(colIdx, rowIdx);
            if (winner) return; 
        }
        if (winner) return;
    }

    var flatBoard = board.flatten()
    if (!flatBoard.includes(0) && winner == null) {
        console.log('You TIE!')
        return 
    }

};

function checkRight(colIdx, rowIdx) {
    // return 1 or -1 if player wins, or 'T' if tie game, else return null
    if (colIdx > 3) return; //console.log("cant check right at", colIdx, rowIdx); 
    var cell1 = board[colIdx][rowIdx];
    var cell2 = board[colIdx +1][rowIdx];
    var cell3 = board[colIdx +2][rowIdx];
    var cell4 = board[colIdx +3][rowIdx];
    var sum =  Math.abs(cell1 + cell2 + cell3 + cell4);
    if (sum === 4) winner = board[colIdx][rowIdx];
    return winner
}

function checkUp(colIdx, rowIdx) {
    if (rowIdx > 3) return; 
    var cell1 = board[colIdx][rowIdx];
    var cell2 = board[colIdx][rowIdx + 1];
    var cell3 = board[colIdx][rowIdx + 2];
    var cell4 = board[colIdx][rowIdx + 3];
    var sum =  Math.abs(cell1 + cell2 + cell3 + cell4);
    if (sum === 4) winner = board[colIdx][rowIdx];
    return winner
}

function checkDiagnolUp(colIdx, rowIdx){
    if (colIdx > 3) return; 
    var cell1 = board[colIdx][rowIdx];
    var cell2 = board[colIdx + 1][rowIdx + 1];
    var cell3 = board[colIdx + 2][rowIdx + 2];
    var cell4 = board[colIdx + 3][rowIdx + 3];

    var sum =  Math.abs(cell1 + cell2 + cell3 + cell4);
    if (sum === 4) winner = board[colIdx][rowIdx];
    return winner
}

function checkDiagnolDown(colIdx, rowIdx){
    if (colIdx > 3) return; 
    var cell1 = board[colIdx][rowIdx];
    var cell2 = board[colIdx + 1][rowIdx - 1];
    var cell3 = board[colIdx + 2][rowIdx - 2];
    var cell4 = board[colIdx + 3][rowIdx - 3];

    var sum =  Math.abs(cell1 + cell2 + cell3 + cell4);
    if (sum === 4) winner = board[colIdx][rowIdx];
    return winner
}


    










            // function winCheck () {
            //     Math.abs(board[colIdx][discIdx] + board[colIdx + 1][discIdx] + board[colIdx + 2] + board[colIdx + 3][discIdx]) === 4;
               
            //     Math.abs(board[colIdx][discIdx] + board[colIdx][discIdx + 1] + board[colIdx[discIdx + 2]] + board[colIdx][discIdx +3]) === 4;
             
            //     Math.abs(board[colIdx][discIdx] + board[colIdx + 1 ][discIdx +1] + board[colIdx + 2][discIdx + 2] + board[colIdx + 3][discIdx + 3]) === 4;
                 
            //     Math.abs(board[colIdx][discIdx] + board[colIdx + 1][discIdx - 1] + board[colIdx - 2][discIdx + 2] + board[colIdx - 3][discIdx + 3]) === 4;
            //  };  
            
            
      
                    //     })
                    
                    
                    
                    
                  
                                    
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
                                                                                