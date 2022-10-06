



var startBtnEl = document.querySelector("#start");
var quizContainer = document.querySelector("#quiz");
var currentQuestionIndex = 0;
var choicesEl = document.querySelector("#choices")
var timer;
var time = 90
var display = document.querySelector("#time");
 

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

time = time - 10
if (time <= 0){

    time === 0;
    display.textContent = time
    endGame()
}
display.textContent = time
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

function startTimer(){
    timer = setInterval(function () {

        time--
        display.textContent = time

        if (time <= 0){

            time === 0;
            display.textContent = time
            endGame()
        } 

    }, 1000);


}


function endGame() {
    clearInterval(timer)
}

 

function startQuiz() {
    var startScreenEl = document.querySelector("#start-screen");
    startScreenEl.setAttribute("class", "hide");
    quizContainer.classList.remove("hide");
    console.log("start");
    display.textContent = time
    startTimer();


    getquestion()
    
}


startBtnEl.addEventListener("click", startQuiz);   






