const questions = [
    {
        question: "add text",
        answers: [
            {text: "correct answer", correct: true},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "add text",
        answers: [
            {text: "correct answer", correct: true},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "add text",
        answers: [
            {text: "correct answer", correct: true},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "add text",
        answers: [
            {text: "correct answer", correct: true},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "add text",
        answers: [
            {text: "correct answer", correct: true},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "add text",
        answers: [
            {text: "correct answer", correct: true},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "add text",
        answers: [
            {text: "correct answer", correct: true},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "add text",
        answers: [
            {text: "correct answer", correct: true},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "add text",
        answers: [
            {text: "correct answer", correct: true},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
        ]
    },
]

const questionsElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const feedbackElement = document.getElementById("feedbackTxt");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    })
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    feedbackTxt.style.display = "block";
}


function resetState(){
    feedbackTxt.style.display = "none";
    while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}
}

startQuiz();


function timer(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById("time").innerHTML='00:'+ sec;
        sec--;
        if (sec < 0) {
            clearInterval(time);
        }
    }, 1000);
}