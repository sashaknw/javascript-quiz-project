class Quiz {
   

     constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this. timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
     }

     getQuestion() {
        return this.questions[this.currentQuestionIndex];
     }
    
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

     shuffleQuestions(answer) {
        this.questions.sort(() => Math.random() - 0.5);
     }

     checkAnswer(answer) {
        this.correctAnswers++;
     }

    hasEnded(){
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else {
            return true;
        }
        
    }
    
}