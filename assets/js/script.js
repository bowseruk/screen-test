// Initiate MVC
// Model
let questionArray = moviesList.map(x => new MovieQuestion(x));
console.log(questionArray)
let game = new Game(new Quiz(questionArray));

// Page
let page = new Page($(`#panel-1`), $(`#panel-2`), $('#panel-3'), $(`#panel-4`), $('#timer'), $('#navbar-logo'), $('#favicon'));

// Controller
let controller = new Controller(game, page);
controller.init()