// This file houses the Controller. This controls interaction between the user, model and view.

class Controller {
    constructor(model, view) {
        this._model = model;
        this._view = view;
        this._paused = false;
    }
    start() {
        this._model.start();
        this._view.renderScore(this._model.score)
        this.startTimer();
        let { button, input } = this._view.renderQuestion(this._model.question)
        button.on("click", (event) => {
            console.log(input.val())
            this.guess(input.val())
        })
    }
    startTimer() {
        // event

        // Sets interval in variable
        // Start the timer on an interval
        this.timerInterval = setInterval(() => {
            // Stop the function if the timer is at or below zero
            if (this._model.gameState === "Game Over") {
                // Stops execution of action at set interval
                this._view.renderGameOver()
                clearInterval(this.timerInterval);
                return
            } else if (this._paused) {
                return
            }
            // If nothing has stopped it so far, increment the timer down and display it
            this._model.decrementTimer()
            this._view.renderTimer(this._model.timer)
            // The number below here is how many millisecons to run this function            
        }, (Math.floor(1000 / this._model.ticks)));
    }
    saveScore() {

    }
    guess(guess) {
        // get choice
        console.log(guess);
        // feed choice to model
        if (this._model.guess(guess)) {
            this._view.renderScore(this._model.score);
            let { button, input } = this._view.renderQuestion(this._model.question)
            button.on("click", (event) => {
                console.log(input.val())
                this.guess(input.val())
            })
        }
    }
    init() {
        // start button function

        // call function
        let { button } = this._view.renderStartScreen()
        button.on("click", (event) => {
            event.preventDefault();
            this.start();
        })
    }
}
