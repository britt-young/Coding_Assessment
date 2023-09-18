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
const feedbackElement = document.getElementById("feedback-txt");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
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