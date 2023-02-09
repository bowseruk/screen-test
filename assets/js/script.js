// Initiate MVC
// Model
let game = new Game();
// Page
let page = new Page();
// Controller
let controller = new Controller(game, page);

controller.startGame();