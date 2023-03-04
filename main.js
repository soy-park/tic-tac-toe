var currentGame = new Game();

var playerTurnHeading = document.querySelector(".player-turn");
var boxContainer = document.querySelector('.box-container');
var box = document.querySelectorAll('.box');

window.addEventListener("load", startNewGame);
boxContainer.addEventListener("click", takeTurn);

function startNewGame() {
    currentGame.determineFirstTurn();
    currentGame.determineNextTurn();
    changePlayerTurnHeading();
    clearBoard();
    boxContainer.style.pointerEvents = '';
}

function takeTurn(event) {
    event.preventDefault();
    currentGame.playGame(event.target.id);
    displayToken(event);
    currentGame.determineWin();
    displayWinner();
    if (currentGame.detectDraw() === "draw") {
        displayDraw();
    }
}

function changePlayerTurnHeading() {
    if (currentGame.turn === currentGame.player1.token) {
        playerTurnHeading.innerHTML = `<span>IT'S</span><img src="${currentGame.player1.token}" alt="bee-emoji"><span>'S TURN!</span>`;
    } else if (currentGame.turn === currentGame.player2.token) {
        playerTurnHeading.innerHTML = `<span>IT'S </span><img src="${currentGame.player2.token}" alt="flower-emoji"><span>'S TURN!</span>`;
    }
}

function displayToken(event) {
    if (currentGame.turn === currentGame.player1.token) {
        if (event.target.id && !event.target.innerHTML) {
            document.getElementById(event.target.id).innerHTML += `<img src="${currentGame.player1.token}" alt="bee-emoji">`;
        } 
    } else if (currentGame.turn === currentGame.player2.token) {
        if (event.target.id && !event.target.innerHTML) {
            document.getElementById(event.target.id).innerHTML += `<img src="${currentGame.player2.token}" alt="flower-emoji">`;
        }
    }
}

// function preventClick(event) {
//     for (var i = 0; i < box.length; i++) {
//         if (event.target.id === box[i].id) {
//             box[i].style.pointerEvents = "none";
//         }
//     }
// }

function displayWinner() {
    if (currentGame.determineWin() === "player1") {
        playerTurnHeading.innerHTML = `<img src="${currentGame.player1.token}" alt="bee-emoji"><span>WINS!</span>`;
        boxContainer.style.pointerEvents = "none";
        setTimeout(startNewGame, 2000)
    } else if (currentGame.determineWin() === "player2") {
        playerTurnHeading.innerHTML = `<img src="${currentGame.player2.token}" alt="flower-emoji"><span>WINS!</span>`; 
        boxContainer.style.pointerEvents = "none";
        setTimeout(startNewGame, 2000)
    } else {
        currentGame.determineNextTurn();
        changePlayerTurnHeading();
    }
}

function displayDraw() {
    playerTurnHeading.innerHTML = `<span>IT'S A DRAW!</span>`; 
    // boxContainer.style.pointerEvents = "none";
    setTimeout(startNewGame, 2000);
}

function clearBoard() {
    currentGame.resetGame();
    for (var i = 0; i < box.length; i++) {
        box[i].innerHTML = '';
    }
}
