// Initiate MVC
// Model
let game = new Game(new Quiz([new MovieQuestion('Terminator'), new MovieQuestion('300')]));

// Page
let page = new Page($(`#panel-1`), $(`#panel-2`), $('#panel-3'), $(`#panel-4`), $('#timer'), $('#favicon'));

// Controller
let controller = new Controller(game, page);
controller.init()