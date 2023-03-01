class Game {
    constructor() {
        this.player1 = new Player("./assets/Bee.png");
        this.player2 = new Player("./assets/Flowers.png");
        this.board = ["box-1", "box-2", "box-3", "box-4", "box-5", "box-6", "box-7", "box-8", "box-9"];
        this.currentBoard = [];
        this.winningCombinations = [["box-1", "box-2", "box-3"], ["box-4", "box-5", "box-6"], ["box-7", "box-8", "box-9"], ["box-1", "box-4", "box-7"], ["box-2", "box-5", "box-8"], ["box-3", "box-6", "box-9"], ["box-1", "box-5", "box-9"], ["box-3", "box-5", "box-7"]];
        this.turn = this.determineFirstTurn();
    }   
}