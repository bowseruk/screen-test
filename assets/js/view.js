// This file houses the View. This controls what the user can see
class Page {
    constructor(panel1, panel2, panel3, panel4) {
        this._panel1 = panel1;
        this._panel2 = panel2;
        this._panel3 = panel3;
        this._panel4 = panel4;
    }
    // Displays a timer with the seconds inputted
    renderTimer(seconds) {
        
    }
    // Clear the four game panels
    clearScreen() {
        // clear panel 1
        this._panel1.empty()
        // clear panel 2
        this._panel2.empty()
        // clear panel 3
        this._panel3.empty()
        // clear panel 4
        this._panel4.empty()
    }
    // Display the start screen
    renderStartScreen() {
        // clear screen
        this.clearScreen()

        // make all items central in panels

        // panel 1 - create start button
        let buttonDiv = $('<div>').addClass('d-flex justify-content-center align-items-center')
        let button = $('<button>').text('Start')
        this._panel1.append(buttonDiv.append(button))
        
        // panel 2 & 3 - images
        let imageDiv2 = $('<div>')
        let imagePanel2 = $('<img>').attr('src', "http://placekitten.com/g/400/200")
        this._panel2.append(imageDiv2.append(imagePanel2))

        let imageDiv4 = $('<div>')
        let imagePanel4 = $('<img>').attr('src', "http://placekitten.com/g/400/200")
        this._panel4.append(imageDiv4.append(imagePanel4))

        // panel 3 - high score board
        let highscoreDiv = $('<div>').text("highscores go here")
        this._panel3.append(highscoreDiv);

        // Change contents

    }
    renderQuestion() {
        // clear screen
        this.clearScreen()

        // show question in panel 1
        let questionDiv = $('<div>')
        let questionP = $('<p>').text("question array")
        let input = $('<input>')
        let button = $('<button>').attr({type:'submit'}).text('Submit')

        this._panel1.append(questionDiv.append(questionP, input, button))

        // show hint 1
        let hint1Div = $('<div>').text('hint one').removeClass('d-none')
        this._panel2.append(hint1Div)

        // show hint 2
        let hint2Div = $('<div>').text('hint two').removeClass('d-none')
        this._panel3.append(hint2Div)

        // show hint 3
        let hint3Div = $('<div>').text('hint three').removeClass('d-none')
        this._panel4.append(hint3Div)

    }

    renderGameOver() {
        //clear screen
        this.clearScreen()

        let gameOverDiv = $('<div>').text('Game Over').removeClass('d-none')
        this._panel1.append(gameOverDiv)

        let picture1Div = $('<div>').text('picture goes here').removeClass('d-none')
        this._panel2.append(picture1Div)

        let highScoreDiv = $('<div>').text('high score goes here').removeClass('d-none')
        this._panel3.append(highScoreDiv)

        let picture2Div = $('<div>').text('picture goes here').removeClass('d-none')
        this._panel4.append(picture2Div)


    }
    




}