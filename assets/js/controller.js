// This file houses the Controller. This controls interaction between the user, model and view.

class Controller {
    constructor(model, view) {
        this._model = model;
        this._view = view;
        this._paused = false;
    }
    start() {

        // if player name is blank
        if (! localStorage.getItem("PlayerName")) {

            //open modal
            $("#exampleModal").modal("show")
            return;
        }        

        this._model.start();
        this._view.renderScore(this._model.score)
        this.startTimer();
        let { button, input } = this._view.renderQuestion(this._model.question, this._model.hints)
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
                this._view.renderGameOver(this.highScore)
                clearInterval(this.timerInterval);
                this.addToHighScore(localStorage.getItem("PlayerName"), this._model.score);
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
    guess(guess) {
        // get choice
        console.log(guess);
        // feed choice to model
        if (this._model.guess(guess)) {
            this._view.renderScore(this._model.score);
            let { button, input } = this._view.renderQuestion(this._model.question, this._model.hints)
            button.on("click", (event) => {
                console.log(input.val())
                this.guess(input.val())
            })
        }
    }
    init() {
        // destructor on return items from display
        let { button } = this._view.renderStartScreen()
        // start button function
        button.on("click", (event) => {
            event.preventDefault();
            this.start();
        })

        $("#save-player-name").on("click", this.saveName);

    }

    // save changes modal button
    saveName() {

        // if player name is blank ask player to enter name
        if ($("#player-name").val() === "") {

            // add enter name message OR turn box red?
            return;
        }
        // otherwise save name to storage
        localStorage.setItem("PlayerName", $("#player-name").val());
    }
    // This function adds a new value to high score
    addToHighScore(name, score) {
        let highScoreArray = this.highScore;
        highScoreArray.push([name, score])
        highScoreArray.sort().reverse()
        // Limit high score to 10
        if (highScoreArray.length > 10) {
            highScoreArray.pop();
        }
        this.highScore = highScoreArray;
    }
    // Create the mockup of a highscreen array
    get highScore() {
        // we are checking the local storage is not empty
        if (!localStorage.getItem("Highscore")) {
            return [];
        }
        // we getting the information in local storage
        let highScoreArray = JSON.parse(localStorage.getItem("Highscore"))
        console.log()
        highScoreArray.sort().reverse()
        return highScoreArray;
    }
    set highScore(array) {
        if (typeof array !== 'object') {
            return false;
        }
        if (array.length === 0) {
            localStorage.removeItem("Highscore")
            return true;
        }
        localStorage.setItem("Highscore", JSON.stringify(array))
        return true;
    }
}
