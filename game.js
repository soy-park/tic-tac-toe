class Game {
    constructor() {
        this.player1 = new Player("./assets/Bee.png");
        this.player2 = new Player("./assets/Flowers.png");
        this.board = ["box-1", "box-2", "box-3", "box-4", "box-5", "box-6", "box-7", "box-8", "box-9"];
        this.currentBoard = [];
        this.winningCombinations = [["box-1", "box-2", "box-3"], ["box-4", "box-5", "box-6"], ["box-7", "box-8", "box-9"], ["box-1", "box-4", "box-7"], ["box-2", "box-5", "box-8"], ["box-3", "box-6", "box-9"], ["box-1", "box-5", "box-9"], ["box-3", "box-5", "box-7"]];
        this.turn = this.determineNextTurn();
        this.firstTurn = this.determineFirstTurn();
    }   

    determineFirstTurn() {
        if (this.firstTurn === "player1") {
            this.firstTurn = "player2";
            this.turn = this.player2.token;
        } else if (this.firstTurn === "player2") {
            this.firstTurn = "player1";
            this.turn = this.player1.token;
        } else {
            this.firstTurn = "player1";
            this.turn = this.player1.token;
        }
    }

    determineNextTurn() {
        if (this.turn === this.player1.token) {
            this.turn = this.player2.token;
        } else {
            this.turn = this.player1.token;
        }
    }

    playGame(box) {
        if (!this.currentBoard.includes(box)) {
            if (this.turn === this.player1.token) {
                this.player1.playToken(box);
            } else if (this.turn === this.player2.token) {
                this.player2.playToken(box);
            }
        }
    }

    determineWin() {
        var player;
        if (this.turn === this.player1.token) {
            player = "player1";
        } else {
            player = "player2";
        }
        for (var i = 0; i < this.winningCombinations.length; i++) {
            if (this[player].plays.includes(this.winningCombinations[i][0]) && this[player].plays.includes(this.winningCombinations[i][1]) && this[player].plays.includes(this.winningCombinations[i][2])) {
                return player;
            }
        }
    }

    updateScore() {
        if (this.determineWin() === "player1") {
            this.player1.increaseWins();
        } else if (this.determineWin() === "player2") {
            this.player2.increaseWins();
        }
    }

    detectDraw() {
        var player;
        if (this.turn === this.player1.token) {
            player = "player1";
        } else {
            player = "player2";
        }
        // if (this.currentBoard.length === 9) {
            for (var i = 0; i < this.winningCombinations.length; i++) {
                if (this.currentBoard.length === 9 && !this[player].plays.includes(this.winningCombinations[i][0]) && !this[player].plays.includes(this.winningCombinations[i][1]) && !this[player].plays.includes(this.winningCombinations[i][2])) {
                    return "draw";
                // }   
            }
        }
    }

    resetGame() {
        this.player1.plays = [];
        this.player2.plays = [];
        this.currentBoard = [];
    }
}