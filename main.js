var playerTurnHeading = document.querySelector(".player-turn");
var boxContainer = document.querySelector('.box-container')

var currentGame;

window.addEventListener("load", startNewGame);
boxContainer.addEventListener("click", takeTurn);

function startNewGame() {
    currentGame = new Game();
    currentGame.resetGame();
    currentGame.determineFirstTurn();
    changePlayerTurnHeading();
}

function takeTurn(event) {
    event.preventDefault();
    currentGame.playGame(event.target.id);
    displayToken(event);
    currentGame.determineTurn();
    changePlayerTurnHeading();
    currentGame.determineWin();
}

function changePlayerTurnHeading() {
    if (currentGame.turn === currentGame.player1.token && currentGame.currentBoard.length !== currentGame.board.length) {
        playerTurnHeading.innerHTML = `<span>IT'S</span><img src="${currentGame.player1.token}" alt="bee-emoji"><span>'S TURN!</span>`;
    } else if (currentGame.turn === currentGame.player2.token && currentGame.currentBoard.length !== currentGame.board.length) {
        playerTurnHeading.innerHTML = `<span>IT'S </span><img src="${currentGame.player2.token}" alt="flower-emoji"><span>'S TURN!</span>`;
    } else if (currentGame.currentBoard.length === currentGame.board.length) {
        playerTurnHeading.innerHTML = `<span>IT'S A DRAW!</span>`;
    }
    //     currentGame.determineWin();
//         if (currentGame.player1.wins++) {
//             playerTurnHeading.innerHTML = `<img src=${currentGame.player1.token}><span>WON!</span>`;
//         } else if (currentGame.player2.wins++) {
//             playerTurnHeading.innerHTML = `<img src=${currentGame.player2.token}><span>WON!</span>`;
//         }
}