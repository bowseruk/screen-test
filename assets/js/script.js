// Initiate MVC
// Model
let game = new Game();
// Page
let page = new Page($(`#panel-1`), $(`#panel-2`), $('#panel-3'), $(`#panel-4`));
// Controller
let controller = new Controller(game, page);
