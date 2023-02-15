// This file houses the View. This controls what the user can see
class Page {
    constructor(panel1, panel2, panel3, panel4, timer, logo, favicon) {
        this._panel1 = panel1;
        this._panel2 = panel2;
        this._panel3 = panel3;
        this._panel4 = panel4;
        this._timer = timer
        this._logo = logo
        this._favicon = favicon
    }
    // Displays a timer with the seconds inputted
    renderTimer(seconds) {
        $('#timer-display').text(seconds + "seconds");
    }
    // Displays a timer with the seconds inputted
    renderScore(score) {
        $('#total-score').text(score + " points");
    }
    // Clear the four game panels
    clearScreen() {
        $('#timer-display').text();
        $('#total-score').text();
        // clear panel 1
        this._panel1.empty().removeClass().addClass("panel col-lg-6 order-5 order-lg-1")
        // clear panel 2
        this._panel2.empty().removeClass().addClass("panel col-lg-6 order-1 order-lg-2 d-none d-lg-block")
        // clear panel 3
        this._panel3.empty().removeClass().addClass("panel col-lg-6 order-2 order-lg-5 d-none d-lg-block")
        // clear panel 4
        this._panel4.empty().removeClass().addClass("panel col-lg-6 order-3 order-lg-4 d-none d-lg-block")
    }
    // Display the start screen
    renderStartScreen() {
        // clear screen
        this.clearScreen()
        this._favicon.attr({ 'href': './assets/images/logo-open.ico', 'type': "image/x-icon" })
        this._logo.removeClass('brand-logo-closed').addClass('brand-logo')

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

        // return buttons that need altering
        return { 'button': button }
    }
    renderQuestion(question, hints) {
        // clear screen
        this.clearScreen()
        // this._timer.removeClass('d-none').addClass('active-timer')
        this._favicon.attr({ 'href': './assets/images/logo-animate.ico', 'type': "image/gif" })
        this._logo.removeClass('brand-logo-closed').addClass('brand-logo')

        // show question in panel 1
        let questionDiv = $('<div>')
        let questionP = $('<p>').text(`${question}`)
        let input = $('<input>')
        let button = $('<button>').attr({ type: 'submit' }).text('Submit')

        this._panel1.append(questionDiv.append(questionP, input, button))

        // show hint 1
        console.log(hints)
        let hint1Div = $('<div>').text(hints[0].hint)
        this._panel2.removeClass('d-none').append(hint1Div)

        // generate hint 2
        let hint2Div = $('<div>');
        this._panel3.removeClass('d-none').append(hint2Div);

        // split actor array into separate actors
        let element = hints[1].hint.split(",")[0]

        var giphyAPIKey = "TpCd8mDzwDatSRlW5OE4uVl2OfAuTE1F";

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + element + "&api_key=" + giphyAPIKey;

        // call giphy API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // Creating an image tag
            var gifImage = $("<img>");

            // Setting the src attribute of the image
            gifImage.attr("src", response.data[0].images.fixed_height.url);

            // show hint 2
            hint2Div.append(gifImage);

        });
        // show hint 3
        let hint3Div = $('<div>').text(hints[2].hint)
        this._panel4.removeClass('d-none').append(hint3Div)

        // return onbject of items that need adjusting
        return { 'button': button, 'input': input }
    }
    // Make the game over screen
    renderGameOver(highScore) {
        //clear screen
        this.clearScreen()
        this._timer.addClass('d-none')
        this._favicon.attr({ 'href': './assets/images/logo-closed.ico', 'type': "image/x-icon" })
        this._logo.removeClass('brand-logo').addClass('brand-logo-closed')

        let gameOverDiv = $('<div>').text('Game Over')
        let replayButton = $('<button>').addClass("btn").text("Play Again?")
        gameOverDiv.append(replayButton);
        this._panel1.removeClass('d-none').append(gameOverDiv)

        let picture1Div = $('<div>').text('picture goes here').removeClass('d-none').css({ 'height': '100%', 'background-image': 'url(http://placekitten.com/g/400/200) ,url(http://placekitten.com/g/300/200) ,url(http://placekitten.com/g/200/200)', 'background-repeat': 'repeat-x, repeat' })
        this._panel2.append(picture1Div)

        let highScoreDiv = $('<div>').text('high score goes here')

        // Loops through and shows the array elements
        let scoreList = $("<ol>")
        if (highScore.length > 0) {
        highScore.forEach(element => {
            scoreList.append($("<li>").text(`${element[0]} - ${element[1]}`))
        });
    } else {
        scoreList.append($("<li>").text(`No Scores Recorded Yet!`))
    }

        // Displays the list of highscores which is an array
        highScoreDiv.append(scoreList)
        this._panel3.removeClass('d-none').append(highScoreDiv)

        let picture2Div = $('<div>').text('picture goes here').removeClass('d-none')
        this._panel4.append(picture2Div)

        return {"replayButton": replayButton}
    }





}