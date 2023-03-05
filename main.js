var currentGame = new Game();

var playerTurnHeading = document.querySelector(".player-turn");
var boxContainer = document.querySelector('.box-container');
var box = document.querySelectorAll('.box');
var player1Wins = document.querySelector('.bee-wins-count');
var player2Wins = document.querySelector('.flower-wins-count');

window.addEventListener("load", startNewGame);
boxContainer.addEventListener("click", determineIfTokenPresent);

function startNewGame() {
    currentGame.determineFirstTurn();
    currentGame.determineNextTurn();
    changePlayerTurnHeading();
    clearBoard();
    boxContainer.style.pointerEvents = '';
}

function determineIfTokenPresent(event) {
    event.preventDefault();
    var box = document.getElementById(event.target.id)
    if (box && !box.innerHTML) {
        takeTurn(event.target.id);
    }
}

function takeTurn(id) {
    currentGame.playGame(id);
    displayToken(id);
    currentGame.determineWin();
    currentGame.updateScore();
    increaseWinCount();
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

function displayToken(id) {
    if (currentGame.turn === currentGame.player1.token) {
            document.getElementById(id).innerHTML += `<img src="${currentGame.player1.token}" alt="bee-emoji">`;
    } else if (currentGame.turn === currentGame.player2.token) {
            document.getElementById(id).innerHTML += `<img src="${currentGame.player2.token}" alt="flower-emoji">`;
    }
}

function displayWinner() {
    if (currentGame.determineWin() === "player1") {
        playerTurnHeading.innerHTML = `<img src="${currentGame.player1.token}" alt="bee-emoji"><span>WINS!</span>`;
        boxContainer.style.pointerEvents = "none";
        setTimeout(startNewGame, 2000);
    } else if (currentGame.determineWin() === "player2") {
        playerTurnHeading.innerHTML = `<img src="${currentGame.player2.token}" alt="flower-emoji"><span>WINS!</span>`; 
        boxContainer.style.pointerEvents = "none";  
        setTimeout(startNewGame, 2000);
    } else {
        currentGame.determineNextTurn();
        changePlayerTurnHeading();
    }
}

function displayDraw() {
    playerTurnHeading.innerHTML = `<span>IT'S A DRAW!</span>`; 
    setTimeout(startNewGame, 2000);
}

function increaseWinCount() {
    if (currentGame.determineWin() === "player1") {
        player1Wins.innerText = `WINS: ${currentGame.player1.wins}`;
    } else if (currentGame.determineWin() === "player2") {
        player2Wins.innerText = `WINS: ${currentGame.player2.wins}`;
    }
}

function clearBoard() {
    currentGame.resetGame();
    for (var i = 0; i < box.length; i++) {
        box[i].innerHTML = '';
    }
}