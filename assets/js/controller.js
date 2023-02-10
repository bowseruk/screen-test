// This file houses the Controller. This controls interaction between the user, model and view.

class Controller {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }
    start() {
        // Set the score
        // Set the timer
        this._model.start();
        this.startTimer();
        // while (this._model._gameState === 1) {

        //     // Game logic while game is playing
        //     // Render the Question

        // }
        this._view.renderGameOver()
        this._model.score = 20;
        console.log(this._model.score)
    }
    startTimer() {
        // event
        this._model.decrementTimer()
        this._view.renderTimer(this._model.timer)
    }
    saveScore() {

    }
    guess() {
        // get choice
        // feed choice to model
    }
    
}
