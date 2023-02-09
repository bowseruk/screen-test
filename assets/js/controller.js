// This file houses the Controller. This controls interaction between the user, model and view.

class Controller {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }
    startGame() {
        this._model.score = 20;
        console.log(this._model.score)
    }
}
