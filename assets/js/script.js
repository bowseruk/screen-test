// Initiate MVC
// Model
let game = new Game(new Quiz(moviesList.map(x => new MovieQuestion(x))));

// Page
let page = new Page($(`#panel-1`), $(`#panel-2`), $('#panel-3'), $(`#panel-4`), $('#timer'), $('#navbar-logo'), $('#favicon'));

// Controller
let controller = new Controller(game, page);
controller.init()