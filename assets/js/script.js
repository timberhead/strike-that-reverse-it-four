
var startBtnEl = document.querySelector("#start");
var quizContainer = document.querySelector("#quiz");
var currentQuestionIndex = 0;
var choicesEl = document.querySelector("#choices")


 

var question = [{
    questionTitle: "Whats the tallest mountain in Colorado?",
    choices: ["Pikes Peak", "Mount Elbert", "Haystack Mountain", "Longs Peak"],
    answer: "Mount Elbert"
},{
    questionTitle: "Whats the shortest mountain in Colorado?",
    choices: ["Pikes Peak", "Mount Elbert", "Haystack Mountain", "Longs Peak"],
    answer: "Haystack Mountain"
},{
    questionTitle: "Whats the purplest mountain in Colorado?",
    choices: ["Pikes Peak", "Mount Elbert", "Haystack Mountain", "Longs Peak"],
    answer: "Pikes Peak"
},{
    questionTitle: "Whats the deadliest mountain in Colorado?",
    choices: ["Pikes Peak", "Mount Elbert", "Haystack Mountain", "Longs Peak"],
    answer: "Longs Peak"

},{
    questionTitle: "Whats the softest mountain in Colorado?",
    choices: ["Pikes Peak", "Mount Elbert", "Rabbit Mountain", "Longs Peak"],
    answer: "Rabbit Mountain"
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

    for (var i = 0; i < currentQuestion.choices.length; i++) {      //  what's wrong with length

        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", currentQuestion.choices[i]);
        choiceBtn.textContent = currentQuestion.choices[i];

        choiceBtn.addEventListener("click", checkAnswer);
        choicesEl.appendChild(choiceBtn);

        

    }




}

function startTimer(duration, display){
    var timer = duration, stop, minutes, seconds;
    setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes <10 ? "0" + minutes : minutes;
        seconds = seconds <10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;      // what's wrong here

        if (--timer < 0){

            timer = duration;
        }

        // if (--timer = 0){

        //     timer = stop;
        // } 

    }, 1000);


}

window.onload = function(){

    var fiveMinutes = 60 * 5,
    display = document.querySelector("#time");
    startTimer(fiveMinutes, display);
};

function startQuiz() {
    var startScreenEl = document.querySelector("#start-screen");
    startScreenEl.setAttribute("class", "hide");
    quizContainer.classList.remove("hide");
    console.log("start");

    getquestion()
    startTimer()
}


startBtnEl.addEventListener("click", startQuiz, startTimer);    //  why doesn't this work






