// This file houses the Model. This controls what the user can see
class Game {
    constructor(quiz) {
        this._quiz = quiz;
        this._timer = 20;
        this._score = 0;
        this._gameState = 0
        this._gameStates = ["Start Screen", "Game", "Game Over"]
    }
    // Decrease the timer by a step
    decrementTimer() {
        this._timer--;
        if (this._gameState === 1 && this._timer <= 0) {
            this._gameState++
            this._timer = 0;
        } 
    }
    // Logic to start the game
    start() {
        this._quiz.start()
        this._timer = 40;
        this._gameState = 1;
        this._score = 0;
    }
    // Logic when a guess is made
    guess(guess){
        if (this._gameState !== 1) {
            return false;
        };
        if (this._quiz.guess(guess)){
            this._score++;
            if (this._quiz.isEnded) {
                this._gameState = 2;
            };
            return true;
        };
        return false;
    };
    set score(score) {
        this._score = score;
    };
    get score() {
        return this._score;
    };
    get timer() {
        return this._timer;
    }
    get hints() {
        return false;
    };
}