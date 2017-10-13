var color = {
    "0": "white",
    "1": "blue",
    "-1": "red" 
}

var board;
var winner;
var turn;

var $msg = $('.gameMessage');

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

Array.prototype.flatten = function() {
    return this.reduce(function(a, b) {
        return a.concat(b);
      }, []);
}

function render () {
    board.flatten().forEach(function(elem, index) {
        $(`#${index}`).css('background-color', color[elem.toString()]); 
    })
    message(winner);
}

$('.dropButton button').on('click', function() {
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
        return 
    }
};

function checkRight(colIdx, rowIdx) {
    if (colIdx > 3) return; 
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

document.querySelector(".reset").addEventListener('click', function() {
    init();
    render();
});

function message(winner) {
    var flatBoard = board.flatten();
    if (winner === 1 || winner === -1) {
        $msg.html(`${turn === 1 ? 'Blue' : 'Red'} WINS!`);
        // $board.toggleClass('.gameSetMatch');
    } else if (!flatBoard.includes(0) && winner == null) {
        $msg.html("Tie Game");
    } else {
        $msg.html(`It's ${turn === 1 ? 'Blue' : 'Red'}'s Turn`);
    }
}

init();
render();   