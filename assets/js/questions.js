// Represents a hint
class Hint {

}

// This class describes a question in the game
class Question {
    constructor(question, answer, hints) {
        this._question = question;
        this._answer = answer.toLowerCase();
        this._hints = hints
    }
    guess(guess) {
        // A good guess
        if (guess.toLowerCase() === this._answer) {
            return true;
        }
        // A bad guess
        return false;
    }
    get question() {
        return this._question
    }
}
// This class is an extension of Question for movie based questions
class MovieQuestion extends Question {
    constructor(movie) {
        // Get movie information from API

        // Calls the constructor for a Question
        super("Guess the Movie?", movie, [movie, movie, movie]);
        this._movie = movie;
    }
}

class YearQuestion extends Question {
    constructor(year) {
        // Get year information here

        // Calls the constructor for a Question
        super("Guess the Year?", year, [year, year, year]);
        this.year = year;
    }
}
// The collection of Questions
class Quiz {
    constructor(questions) {
        this._questions = questions
        this._currentQuestion = 0;
        this._ended = false;
    }
    // Shuffle the order of questions
    shuffleQuestions() {
        let currentIndex = this._questions.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this._questions[currentIndex], this._questions[randomIndex]] = [
                this._questions[randomIndex], this._questions[currentIndex]];
        }
        // Return true when complete
        return true;
    }
    // Accepts a guess for the current question. If it is correct it will move to the next question.
    guess(guess) {
        // Check the quiz hasn't ended
        if (this._ended) {
            return false;
        }
        // Check if the guess is correct
        if (this.activeQuestion.guess(guess)) {
            this.nextQuestion();
            return true;
        }
        // Guess is wrong
        return false;
    }
    nextQuestion() {
        // This goes to the next Question
        if (this._currentQuestion < this._questions.length - 1) {
            this._currentQuestion++;
            return true;
        }
        this._currentQuestion = 0;
        this._ended = true;
        return false
    }
    start() {
        // This starts the quiz
        this.shuffleQuestions();
        this._activeQuestion = 0;
        this._ended = false;
    }
    get activeQuestion() {
        return this._questions[this._currentQuestion];
    }
    get isEnded() {
        return this._ended;
    }
    get question() {
        return this.activeQuestion.question;
    }
}