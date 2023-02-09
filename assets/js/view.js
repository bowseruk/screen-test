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
        //Target panel 1
        // Change contents

    }
    renderQuestion() {

    }
    renderGameOver() {

    }
    




}