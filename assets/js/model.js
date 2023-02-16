// This file houses the Model. This controls what the user can see
class Game {
    constructor(quiz) {
        this._quiz = quiz;
        this._timer = 40;
        this._ticks = 1;
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
        // Give 5 seconds a question
        this._timer = this._quiz.length * 5 * this._ticks;
        this._gameState = 1;
        this._score = 0;
    }
    // Logic when a guess is made
    guess(guess){
        // if the game isn't active
        if (this._gameState !== 1) {
            return false;
        };

        // if the game is active
        if (this._quiz.guess(guess)){
            this._score++;
            if (this._quiz.isEnded) {
                this._gameState = 2;
            };
            return true;
        };
        return false;
    };
    // setters
    set score(score) {
        this._score = score;
    };
    // getters
    get score() {
        return this._score;
    };
    get timer() {
        return Math.floor(this._timer/this._ticks);
    }
    get ticks() {
        return this._ticks
    }
    get hints() {
        return this._quiz.hints;
    };
    get gameState() {
        return this._gameStates[this._gameState];
    }
    get question() {
        return this._quiz.question;
    }
}