// This file houses the Model. This controls what the user can see
class Game {
    constructor() {
        this._timer = 20;
        this._score = 0;
        this._gameState = 0
        this._gameStates = ["Start Screen", "Game", "Game Over"]
        this._questions = []
    }
    // Decrease the timer by a step
    decrementTimer() {
        this._timer--;
        if (this._gameState === 1 && this._timer <= 0) {
            this._gameState++
        } 
    }
    // Logic to start the game
    startGame() {
        this._timer = 40;
        this._gameState = 1;
        this._score = 0;
    }
    answerQuestion(answer){
        this._score++;

    }
    set score(score) {
        this._score = score;
    }
    get score() {
        return 99;
    }
    get hints() {
        return false
    }

}