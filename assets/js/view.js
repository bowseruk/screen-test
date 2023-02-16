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
        $('#timer-display').text(seconds + " seconds");
    }
    // Displays a timer with the seconds inputted
    renderScore(score) {
        $('#total-score').text(score + " points");
    }
    // Clear the four game panels
    clearScreen() {
        $('#timer-display').text(null);
        $('#total-score').text(null);
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
    renderStartScreen(highScore) {
        // clear screen
        this.clearScreen()
        this._favicon.attr({ 'href': './assets/images/logo-open.ico', 'type': "image/x-icon" })
        this._logo.removeClass('brand-logo-closed').addClass('brand-logo')

        // make all items central in panels

        // panel 1 - create start button
        let buttonDiv = $('<div>').addClass('d-flex justify-content-center align-items-center')
        let button = $('<button>').text('Start')
        this._panel1.removeClass('d-none').addClass("double-panel").append(buttonDiv.append(button))

        // panel 2 & 3 - images
        let imageDiv2 = $('<div>').css({
            "height": "100%",
            "width": "100%"
        }).addClass('d-flex justify-content-center align-items-center')
        let imagePanel2 = $('<img>').attr('src', "https://m.media-amazon.com/images/M/MV5BOTk0OWE4NTQtYzNlYS00YTc3LWI1YzQtZGJjZDEyOGE0NTg0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UY720_.jpg")
        this._panel2.append(imageDiv2.append(imagePanel2))

        let imageDiv4 = $('<div>').css({
            "height": "100%",
            "width": "100%"
        }).addClass('d-flex justify-content-center align-items-center')
        let imagePanel4 = $('<img>').attr('src', "https://m.media-amazon.com/images/M/MV5BNzlhYjEzOGItN2MwNS00ODRiLWE5OTItYThiNmJlMTdmMzgxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX280_CR0,10,280,414_.jpg")
        this._panel4.append(imageDiv4.append(imagePanel4))

        // panel 3 - high score board
        let highscoreDiv = $('<div>').text("High-scores")
        let scoreList = this.renderHighScoreDiv(highScore)

        // Displays the list of highscores which is an array
        highscoreDiv.append(scoreList)
        this._panel3.removeClass('d-none').addClass("double-panel").append(highscoreDiv);

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
        let questionDiv = $('<div>').addClass("p-5")
        let questionP = $('<p>').text(`${question}`)
        let input = $('<input>')
        let button = $('<button>').attr({ type: 'submit' }).text('Submit')

        this._panel1.append(questionDiv.append(questionP, input, button))

        // show hint 1
        let hint1Div = $('<div>').addClass("hint").css({
            "height": "100%",
            "width": "100%"
        }).addClass('d-flex justify-content-center align-items-center p-5')
        let curtainVideo1 = $('<video>').attr({"width":"100%", "height":"100%", "src":"assets/sfx/hsl edit 10_VP9.webm"})
        this._panel2.removeClass('d-none').append(hint1Div.append(curtainVideo1, $('<p>').text(hints[0].hint).css({"width":"80%"})))

        // generate hint 2
        let hint2Div = $('<div>').addClass("hint").css({
            "height": "100%",
            "width": "100%"
        }).addClass('d-flex justify-content-center align-items-center p-3');
        let curtainVideo2 = $('<video>').attr({"width":"100%", "height":"100%", "src":"assets/sfx/hsl edit 10_VP9.webm"})
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
            hint2Div.append(curtainVideo2,gifImage);

        });

        // show hint 3
        let hint3Div = $('<div>').css({
            "height": "100%",
            "width": "100%"
        }).addClass('d-flex justify-content-center align-items-center p-5')
        let curtainVideo3 = $('<video>').attr({"width":"100%", "height":"100%", "src":"assets/sfx/hsl edit 10_VP9.webm"});
        this._panel4.removeClass('d-none').append(hint3Div.append(curtainVideo3, $('<p>').text("Year of Release: "), $('<p>').text(hints[2].hint)))
        // Logic to open the curtains
        let timer = 9;
        this.videoTimerInterval = setInterval(() => {
            switch(timer){
                // on nine seconds
                case 9:
                    curtainVideo1.get(0).play()
                    break;
                // on 6 seconds
                case 6:
                    curtainVideo1.get(0).pause();
                    curtainVideo1.addClass("hidden-video")
                    curtainVideo2.get(0).play()
                    break;
                // on 3 seconds
                case 3:
                    curtainVideo2.get(0).pause();
                    curtainVideo2.addClass("d-none");
                    curtainVideo3.get(0).play()
                    break;
                // on 0 seconds
                case 0:
                    curtainVideo3.get(0).pause();
                    curtainVideo3.addClass("d-none");
                    // remove timer
                    clearInterval(this.videoTimerInterval);
                    break;
            }
            timer--;
            return
        }, (1000));
        // return onbject of items that need adjusting
        return { 'button': button, 'input': input }
    }
    renderHighScoreDiv(highScore) {
        // make a list
        let scoreList = $("<ol>")
        // check length
        if (highScore.length > 0) {
            highScore.forEach(element => {
                // This is done for each item in the score
                scoreList.append($("<li>").text(`${element[0]} - ${element[1]}`))
            });
        } else {
            // message if no high score yet
            scoreList.append($("<li>").text(`No Scores Recorded Yet!`))
        }
        return scoreList
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
        this._panel1.removeClass('d-none').addClass("double-panel").append(gameOverDiv)

        // let picture1Div = $('<div>').text('picture goes here').removeClass('d-none').css({ 'height': '100%', 'background-image': 'url(https://m.media-amazon.com/images/M/MV5BOTk0OWE4NTQtYzNlYS00YTc3LWI1YzQtZGJjZDEyOGE0NTg0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UY720_.jpg)', 'background-repeat': 'repeat-x, repeat' })
        // this._panel2.append(picture1Div)

        let imageDiv2 = $('<div>').css({
            "height": "100%",
            "width": "100%"
        }).addClass('d-flex justify-content-center align-items-center')
        let imagePanel2 = $('<img>').attr('src', "https://m.media-amazon.com/images/M/MV5BOTk0OWE4NTQtYzNlYS00YTc3LWI1YzQtZGJjZDEyOGE0NTg0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UY720_.jpg")
        this._panel2.append(imageDiv2.append(imagePanel2))

        let imageDiv4 = $('<div>').css({
            "height": "100%",
            "width": "100%"
        }).addClass('d-flex justify-content-center align-items-center')
        let imagePanel4 = $('<img>').attr('src', "https://m.media-amazon.com/images/M/MV5BNzlhYjEzOGItN2MwNS00ODRiLWE5OTItYThiNmJlMTdmMzgxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX280_CR0,10,280,414_.jpg")
        this._panel4.append(imageDiv4.append(imagePanel4))

        let highScoreDiv = $('<div>').text('High-scores')
        let scoreList = this.renderHighScoreDiv(highScore)

        // Displays the list of highscores which is an array
        highScoreDiv.append(scoreList)
        this._panel3.removeClass('d-none').addClass("double-panel").append(highScoreDiv)

        return { "replayButton": replayButton }
    }





}