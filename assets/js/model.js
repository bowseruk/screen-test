// This file houses the Model. This controls what the user can see
class Game {
    constructor() {
        this._timer = 20;
        this._score = 0;
    }
    decrementTimer() {
        this._timer--;
    }
    set score(score) {
        this._score = score;
    }
    get score() {
        return 99;
    }

}