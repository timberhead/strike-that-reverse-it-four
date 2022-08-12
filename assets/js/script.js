
var startBtnEl = document.querySelector("#start");
var quizContainer = document.querySelector("#quiz");
var currentQuestionIndex = 0;
var choicesEl = document.querySelector("#choices")


//array is a list of ojects 

var question = [{
    questionTitle: "Whats the tallest mountain in Colorado?",
    choices: ["Pikes Peak", "Mount Elbert", "Haystack Mountain", "Longs Peak"],
    answer: "Mount Elbert"
}, {
    questionTitle: "Whats the shortest mountain in Colorado?",
    choices: ["Pikes Peak", "Mount Elbert", "Haystack Mountain", "Longs Peak"],
    answer: "Haystack Mountain"
}, {

}

]

function checkAnswer (){
console.log(this.value);

if(this.value === question[currentQuestionIndex].answer){
    currentQuestionIndex ++
    getquestion()
}
}

console.log(question[0].questionTitle)

function getquestion() {
    var currentQuestion = question[currentQuestionIndex]

    var questionTitle = document.querySelector("#questionTitle");
    questionTitle.textContent = currentQuestion.questionTitle

    console.log(currentQuestion.questionTitle)
    choicesEl.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {

        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", currentQuestion.choices[i]);
        choiceBtn.textContent = currentQuestion.choices[i];

        choiceBtn.addEventListener("click", checkAnswer);
        choicesEl.appendChild(choiceBtn);

        

    }




}

function startQuiz() {
    var startScreenEl = document.querySelector("#start-screen");
    startScreenEl.setAttribute("class", "hide");
    quizContainer.classList.remove("hide");
    console.log("start");

    getquestion()
    startClock()
}


startBtnEl.addEventListener("click", startQuiz);






