//array of questions to ask
const questions = [
  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },

  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },

  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },

  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },

  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },

  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },

  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },

  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },

  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },

  {
    question: "add text",
    answers: [
      { text: "correct answer", correct: true },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
      { text: "wrong answer", correct: false },
    ],
  },
];

//create variables from html document
const questionsElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const feedbackElement = document.getElementById("feedbackTxt");
const button = document.createElement("button");

//initialize variables
let currentQuestionIndex = 0;
let score = 0;
var sec = 75;

//timer function to begin timer at 75 seconds
function timer() {
  var sec = 75;
  var time = setInterval(function () {
    document.getElementById("time").innerHTML = "00:" + sec;
    sec--;
    if (sec < 0) {
      clearInterval(time);
    }
  }, 1000);
}

//function to "display" hidden quiz and ask first question
function startQuiz() {
  document.querySelector(".intro").classList.add("hide");
  currentQuestionIndex = 0;
  score = 0;
  timer();
  document.querySelector(".quiz").classList.remove("hide");
  showQuestion();
}

//show questions and number them
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionsElement.innerHTML = questionNum + ". " + currentQuestion.question;

  //show possible answers within clickable buttons
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.disabled = false;
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

//display feedback based on answer (correct v. incorrect)
function displayFeedback(isCorrect) {
  var feedback = "";
  if (isCorrect) {
    feedback = "Nice job!";
  } else {
    feedback = "Not quite...";
  }
  feedbackTxt.style.display = "block";
  feedbackTxt.textContent = feedback;
}

//decide if the answer selected is true or false based on given dataset
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    // add a 1 second pause in-between questions
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }, 1000);
    //deduct time if question answered is incorrect
  } else {
    selectedBtn.classList.add("incorrect");
    sec-=10;
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }, 1000);
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  displayFeedback(isCorrect);
}

//reset the screen and hide feedback text
function resetState() {
  feedbackTxt.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
//////
function showHighScores() {
  resetState();
  console.log(score);
}

function showScore() {
  const submit = document.createElement("submit-button");
  resetState();
  questionsElement.innerHTML = "Your final score is " + score + " out of 10!";
  document.querySelector(".highscore").classList.remove("hide");
  submit - button.addEventListener("click", showHighScores());
}

//if the current question is less than the question array length, then it will show another question
button.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    showQuestions();
    // if the questions have all been asked then it will show your score
  } else {
    showScore();
  }
});
