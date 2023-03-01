class Player {
    constructor(token) {
        this.id = Date.now();
        this.token = token;
        this.wins = 0;
        this.plays = [];
    }

    increaseWins() {
        return this.wins++;
    }
}