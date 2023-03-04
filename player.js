class Player {
    constructor(token) {
        this.id = Date.now();
        this.token = token;
        this.wins = 0;
        this.plays = [];
    }

    increaseWins() {
        this.wins++;
        return this.wins;
    }

    playToken(box) {
        this.plays.push(box);
    }
}

